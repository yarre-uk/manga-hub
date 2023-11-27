'use client';

import { useEffect, useState } from 'react';

import MangaCard from './components/MangaCard';
import { MangaDTO } from './types';

import { FullPageLoader } from '@/shared/components/lib';
import { axios } from '@/shared/utils/axios';

function AdminMangaPage() {
  const [manga, setManga] = useState<MangaDTO[] | null>();

  useEffect(() => {
    axios.get<MangaDTO[]>('Mangas/get-all').then((res) => setManga(res.data));
  }, []);

  if (!manga) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <FullPageLoader />
      </div>
    );
  }

  const MangaCards = manga.map((manga) => (
    <MangaCard key={manga.mangaId} data={manga} />
  ));

  return (
    <div className="flex flex-col gap-6 pt-2">
      <p className="text-center text-2xl font-bold">Manga List</p>
      <div className="flex flex-wrap justify-center gap-4">{MangaCards}</div>
    </div>
  );
}

export default AdminMangaPage;
