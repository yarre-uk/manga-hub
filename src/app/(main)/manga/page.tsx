'use client';

import { LucideArrowBigDownDash } from 'lucide-react';
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
  const [page, setPage] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<SearchParams>();

  const fetchManga = async (
    title?: string,
    genre?: string,
    rating?: number,
    pageNumber?: number,
  ) => {
    const res = await axios.get<MangaDTO[]>('Mangas/get-all-filter', {
      params: {
        searchQuery: title,
        genre: Genre[genre],
        rating: rating > 0 ? rating : undefined,
        'PagingModel.PageSize': 6,
        'PagingModel.PageCount': pageNumber ?? 1,
      },
    });

    return res.data;
  };

  useEffect(() => {
    fetchManga().then((data) => setManga(data));
  }, []);

  const onSubmit: SubmitHandler<SearchParams> = async (data) => {
    const manga = await fetchManga(data.title, data.genre, data.rating, page);

    setManga(manga);
  };

  const handleClear = () => {
    setValue('title', '');
    setValue('genre', '');
    setValue('rating', 0);

    fetchManga().then((data) => setManga(data));
  };

  const handleLoadNewPage = async () => {
    setPage(page + 1);

    const res = await fetchManga(
      getValues('title'),
      getValues('genre'),
      getValues('rating'),
      page + 1,
    );

    setManga([...(manga ?? []), ...res]);
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
            register={register}
            error={errors?.title?.message}
          />
          <Input
            label="rating"
            type="number"
            defaultValue={0}
            min={0}
            max={5}
            register={register}
            error={errors?.rating?.message}
          />
          <Select
            label={'genre'}
            setValue={setValue}
            getValues={getValues}
            register={register}
            defaultValue={getValues('genre')}
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
        <MangaList manga={manga} />
      </div>
      <Button
        className="mx-auto w-[500px]"
        variant="outline"
        disabled={manga?.length % 6 != 0 || manga?.length == 0}
        onClick={handleLoadNewPage}
      >
        <LucideArrowBigDownDash />
      </Button>
    </div>
  );
}

export default MangaPage;
