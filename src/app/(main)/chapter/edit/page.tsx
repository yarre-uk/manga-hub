'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormValues } from './types';

import { Input } from '@/shared/components/FormComponents';
import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/hooks/useAxiosAuth';
import Chapter from '@/shared/models/chapter';

const validationSchema: yup.ObjectSchema<FormValues> = yup.object({
  title: yup
    .string()
    .required('No title provided.')
    .min(10, 'Title too short.')
    .max(124, 'Title too long.'),
  chapterNumber: yup.number().required('No chapter number provided.'),
  createdOn: yup.string().required('No release date provided.'),
});

function Page() {
  const [chapter, setChapter] = useState<Chapter | null>(null);

  const router = useRouter();
  const queryParams = useSearchParams();

  const axiosAuth = useAxiosAuth();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const mangaId = queryParams.get('mangaId');
  const chapterId = queryParams.get('chapterId');

  const fetchChapter = async () => {
    const res = await axiosAuth.get<Chapter>(`Chapters`, {
      params: { chapterId },
    });

    setChapter(res.data);
    setValue('title', res.data.title);
    setValue('chapterNumber', res.data.chapterNumber);
    setValue(
      'createdOn',
      new Date(res.data.createdOn).toISOString().slice(0, 10),
    );
  };

  useEffect(() => {
    fetchChapter();
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await axiosAuth.post<unknown, unknown, unknown>('Chapters', {
        ...chapter,
        ...data,
        chapterId,
        mangaId,
      });

      toast({
        title: 'Success',
        description: `Chapter "${data.title}" was successfully created!`,
      });

      router.push(`/manga/${mangaId}`);
    } catch (error) {
      toast({
        title: 'Error occurred!',
        variant: 'destructive',
      });
    }
  };

  if (!chapter) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-6 pt-10">
      <p className="text-2xl">Edit chapter</p>
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
          label="chapterNumber"
          type="number"
          defaultValue={1}
          min={0}
          register={register}
          error={errors?.chapterNumber?.message}
        />
        <Input
          label="createdOn"
          type="date"
          register={register}
          error={errors?.createdOn?.message}
          // defaultValue={new Date().toISOString().slice(0, 10)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Page;
