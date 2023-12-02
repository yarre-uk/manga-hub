'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormValues } from './types';

import { Input, Select, Textarea } from '@/shared/components/FormComponents';
import { Button } from '@/shared/components/ui/button';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { useToast } from '@/shared/components/ui/use-toast';
import { ROUTE } from '@/shared/constants/routes';
import useAxiosAuth from '@/shared/hooks/useAxiosAuth';
import { Genre } from '@/shared/models/genre';
import capitalizedWords from '@/shared/utils/capitalizedWords';

const validationSchema: yup.ObjectSchema<FormValues> = yup.object({
  title: yup
    .string()
    .required('No title provided.')
    .min(10, 'Title too short.'),
  genre: yup.string().required('No genre provided.'),
  description: yup
    .string()
    .required('No description provided.')
    .min(15, 'Description must be at least 15 characters long.'),
  releasedOn: yup.date().required('No release date provided.'),
});

function AddMangaPage() {
  const { toast } = useToast();
  const axiosAuth = useAxiosAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await axiosAuth.post<unknown, unknown, unknown>('Mangas', {
        ...data,
        genres: {},
        coverImage: '',
        genre: Genre[data.genre],
      });

      toast({
        title: 'Success',
        description: `Manga "${data.title}" was successfully created!`,
      });

      router.push(ROUTE.MANGA);
    } catch (error) {
      toast({
        title: 'Error occurred!',
        variant: 'destructive',
      });
    }
  };

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
          defaultValue={new Date().toISOString().slice(0, 10)}
        />
        <Textarea
          label="description"
          register={register}
          error={errors?.description?.message}
        />
        <Select
          label={'genre'}
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default AddMangaPage;
