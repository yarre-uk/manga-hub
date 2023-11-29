'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormValues } from './types';

import { Input, Select, Textarea } from '@/shared/components/FormComponents';
import { FullPageLoader } from '@/shared/components/lib';
import { Button } from '@/shared/components/ui/button';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/hooks/useAxiosAuth';
import { Genre, getGenreName } from '@/shared/models/genre';
import Manga from '@/shared/models/manga';
import capitalizedWords from '@/shared/utils/capitalizedWords';

const validationSchema: yup.ObjectSchema<FormValues> = yup.object({
  title: yup.string().required('No title provided.').min(4, 'Title too short.'),
  genre: yup.string().required('No genre provided.'),
  description: yup
    .string()
    .required('No description provided.')
    .min(15, 'Description must be at least 15 characters long.'),
  releasedOn: yup.date().required('No release date provided.'),
});

function AddMangaPage() {
  const [manga, setManga] = useState<Manga | null>(null);
  const { toast } = useToast();
  const axiosAuth = useAxiosAuth();
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      title: manga?.title,
      genre: manga?.genre.toString(),
      description: manga?.description,
      releasedOn: manga?.releasedOn,
    },
    resolver: yupResolver(validationSchema),
  });

  const mangaId = searchParams.get('mangaId');

  const fetchManga = async (mangaId: string) => {
    const res = await axiosAuth.get<Manga>(`Mangas`, {
      params: { mangaId },
    });

    return res.data;
  };

  useEffect(() => {
    fetchManga(mangaId).then((manga) => {
      console.log(manga);
      setValue('title', manga?.title);
      setValue('genre', getGenreName(manga?.genre));
      setValue('description', manga?.description);
      // setValue('releasedOn', new Date());
      setManga(manga);
    });
  }, [mangaId]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await axiosAuth.post<unknown, unknown, unknown>('Mangas', {
        ...manga,
        ...data,
        mangaId,
        genres: {},
        genre: Genre[data.genre],
      });

      toast({
        title: 'Success',
        description: `Manga "${data.title}" was successfully updated!`,
      });
      router.push(`/manga/${mangaId}`);
    } catch (error) {
      toast({
        title: 'Error occurred!',
        variant: 'destructive',
      });
    }
  };

  if (!manga) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <FullPageLoader />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 pt-10">
      <p className="text-2xl">Add new manga</p>
      <form
        className="flex w-[50%] flex-col gap-6 lg:w-[50rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="title"
          register={register}
          error={errors?.title?.message}
        />
        <Input
          label="releasedOn"
          type="date"
          register={register}
          error={errors?.releasedOn?.message}
          defaultValue={new Date(manga?.releasedOn).toISOString().slice(0, 10)}
        />
        <Textarea
          label="description"
          register={register}
          error={errors?.description?.message}
        />
        <Select
          label={'genre'}
          defaultValue="2"
          setValue={setValue}
          getValues={getValues}
          register={register}
          error={errors?.genre?.message}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select genre" />
          </SelectTrigger>
          <SelectContent>
            <>
              {Object.keys(Genre).map((key) => (
                <SelectItem key={key} value={key}>
                  {capitalizedWords(key)}
                </SelectItem>
              ))}
            </>
          </SelectContent>
        </Select>
        {/* <Input
          label="coverImage"
          type="file"
          accept="image/*"
          register={register}
          error={errors?.coverImage?.message}
        /> */}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default AddMangaPage;
