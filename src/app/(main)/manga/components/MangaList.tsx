'use client';

import MangaCard from './MangaCard';
import { MangaDTO } from '../types';

import { BeatLoader, FullPageLoader } from '@/shared/components/lib';

type MangaListProps = {
  manga: MangaDTO[];
};

function MangaList({ manga }: MangaListProps) {
  if (!manga) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <FullPageLoader />
      </div>
    );
  }

  return (
    <>
      {manga?.length !== 0 ? (
        manga.map((manga) => <MangaCard key={manga.mangaId} data={manga} />)
      ) : (
        <div className="text-center">
          <BeatLoader size={30} />
        </div>
      )}
    </>
  );
}

export default MangaList;
