'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import MangaList from './components/MangaList';
import { MangaDTO, SearchParams } from './types';

import { Input, Select } from '@/shared/components/FormComponents';
import { FullPageLoader } from '@/shared/components/lib';
import { Button } from '@/shared/components/ui/button';
import { Card } from '@/shared/components/ui/card';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { Genre } from '@/shared/models/genre';
import { axios } from '@/shared/utils/axios';
import capitalizedWords from '@/shared/utils/capitalizedWords';

function MangaPage() {
  const [manga, setManga] = useState<MangaDTO[] | null>();

  const router = useRouter();
  const path = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<SearchParams>();
  const searchParams = useSearchParams();

  const title = searchParams.get('title');
  const genre = searchParams.get('genre');
  const rating = searchParams.get('rating');

  useEffect(() => {
    axios.get<MangaDTO[]>('Mangas/get-all').then((res) => setManga(res.data));
  }, []);

  const setValuesToParams = (data: SearchParams) => {
    const params = new URLSearchParams(searchParams);

    if (data.title) {
      params.set('title', data.title);
    } else {
      params.delete('title');
    }

    if (data.genre) {
      params.set('genre', data.genre);
    } else {
      params.delete('genre');
    }

    if (data.rating) {
      params.set('rating', data.rating.toString());
    } else {
      params.delete('rating');
    }

    router.replace(`${path}?${params.toString()}`);
  };

  const onSubmit: SubmitHandler<SearchParams> = async (data) => {
    setValuesToParams(data);
  };

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);

    params.delete('title');
    params.delete('genre');
    params.delete('rating');

    setValue('title', null);
    setValue('genre', '');
    setValue('rating', null);

    router.replace(`${path}?${params.toString()}`);
  };

  if (!manga) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <FullPageLoader />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 pt-2">
      <p className="text-center text-2xl font-bold">Manga List</p>
      <Card className="mx-16">
        <form
          className="flex items-center justify-between p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="title"
            defaultValue={title}
            register={register}
            error={errors?.title?.message}
          />
          <Input
            label="rating"
            type="number"
            min={0}
            max={5}
            defaultValue={rating}
            register={register}
            error={errors?.rating?.message}
          />
          <Select
            label={'genre'}
            defaultValue={genre ?? ''}
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
          <Button type="button" onClick={() => handleClear()}>
            Clear
          </Button>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
      <div className="flex flex-wrap justify-center gap-4">
        <MangaList manga={manga} searchParams={{ title, genre, rating }} />
      </div>
    </div>
  );
}

export default MangaPage;
