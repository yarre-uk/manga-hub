'use client';

import MangaCard from './MangaCard';
import { MangaDTO } from '../types';

import { BeatLoader, FullPageLoader } from '@/shared/components/lib';
import { Genre } from '@/shared/models/genre';

type MangaListProps = {
  manga: MangaDTO[];
  searchParams: {
    title?: string;
    genre?: string;
    rating?: string;
  };
};

function MangaList({ manga, searchParams }: MangaListProps) {
  if (!manga) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <FullPageLoader />
      </div>
    );
  }

  const filteredManga = manga.filter((mangaItem) => {
    let isValid = true;
    if (searchParams.title) {
      isValid = isValid && mangaItem.title.includes(searchParams.title);
    }
    if (searchParams.genre) {
      console.log(mangaItem.genre, Genre[searchParams.genre]);
      isValid = isValid && mangaItem.genre == Genre[searchParams.genre];
    }
    if (searchParams.rating) {
      isValid =
        isValid &&
        Math.floor(mangaItem.rating) == parseInt(searchParams.rating);
    }
    return isValid;
  });

  return (
    <>
      {filteredManga?.length !== 0 ? (
        filteredManga.map((manga) => (
          <MangaCard key={manga.mangaId} data={manga} />
        ))
      ) : (
        <div className="text-center">
          <BeatLoader size={30} />
        </div>
      )}
    </>
  );
}

export default MangaList;
