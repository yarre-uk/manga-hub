'use client';

import { useState } from 'react';

import MangaCard from './components/MangaCard';
import { MangaDTO } from './types';

function AdminMangaPage() {
  const mangaasd: MangaDTO[] = [
    {
      mangaId: 'a85cedec-c71a-4774-ae93-355bf1b70c1f',
      title: 'Hello world, this is a very long title',
      genre: 12,
      coverImage: '',
      rating: 0,
    },
    {
      mangaId: 'a85cedec-c71a-4774-ae93-355bf1b70c1f',
      title: 'Hello world, this is a very long title',
      genre: 12,
      coverImage: '',
      rating: 0,
    },
  ];

  const [manga] = useState<MangaDTO[]>(mangaasd);

  // const { toast } = useToast();
  // const axiosAuth = useAxiosAuth();

  // useEffect(() => {
  //   (async () => {
  //     //TODO handle error
  //     const res = await axios.get<MangaDTO[]>('Mangas/get-all');

  //     setManga(res.data);
  //   })();
  // }, []);

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
