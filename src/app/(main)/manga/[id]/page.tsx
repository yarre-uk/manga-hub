'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { FullPageLoader } from '@/shared/components/lib';
import { getGenreName } from '@/shared/models/genre';
import Manga from '@/shared/models/manga';
import { axios } from '@/shared/utils/axios';

const fetchManga = async (id: string) => {
  const res = await axios.get<Manga>(`Mangas`, { params: { mangaId: id } });

  return res.data;
};

type PageProps = {
  params: {
    id: string;
  };
};

function Page({ params: { id } }: PageProps) {
  const [manga, setManga] = useState<Manga | null>(null);

  useEffect(() => {
    fetchManga(id).then(setManga);
  }, [id]);

  if (!manga) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <FullPageLoader />
      </div>
    );
  }

  const byteCharacters = atob(manga.coverImage);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'image/png' });
  const url = URL.createObjectURL(blob);

  return (
    <div className="px-16">
      <div className="flex w-full flex-row justify-around">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{manga.title}</h2>
          <p>Genre: {getGenreName(manga.genre)}</p>
          <p>Description: {manga.description}</p>
          <p>Released on: {new Date(manga.releasedOn).toLocaleDateString()}</p>
          <p>Rating: {manga.rating} / 5</p>
        </div>
        <div className="relative h-[300px] w-[225px]">
          <Image
            src={url}
            layout="fill"
            objectFit="cover"
            alt={`${manga.title} cover image`}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
