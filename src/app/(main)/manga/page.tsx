'use client';

import { useEffect, useState } from 'react';

import { MangaDTO } from './types';

import { axios } from '@/shared/utils/axios';

function AdminMangaPage() {
  const [manga, setManga] = useState<MangaDTO[]>();

  // const { toast } = useToast();
  // const axiosAuth = useAxiosAuth();

  useEffect(() => {
    (async () => {
      //TODO handle error
      const res = await axios.get<MangaDTO[]>('Mangas/get-all');

      setManga(res.data);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-6 pt-10">
      <p className="text-center text-2xl">Manga List</p>
      <p>{manga ? JSON.stringify(manga) : 'nothing'}</p>
    </div>
  );
}

export default AdminMangaPage;
