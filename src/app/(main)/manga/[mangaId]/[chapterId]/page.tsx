'use client';

import { useEffect, useState } from 'react';

import useAxiosAuth from '@/shared/hooks/useAxiosAuth';
import Chapter from '@/shared/models/chapter';

type PageProps = {
  params: {
    mangaId: string;
    chapterId: string;
  };
};

function ChapterPage({ params: { chapterId } }: PageProps) {
  const [chapter, setChapter] = useState<Chapter | null>(null);

  const axiosAuth = useAxiosAuth();

  const fetchChapter = async () => {
    const res = await axiosAuth.get<Chapter>(`Chapters`, {
      params: { chapterId },
    });

    return res.data;
  };

  useEffect(() => {
    fetchChapter()
      .then((chapter) => {
        setChapter(chapter);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [chapterId]);

  return (
    <div className="px-16 pt-8">
      <p>Chapter info</p>
      <p>Chapter title {chapter?.title}</p>
      <p>Scans available {chapter?.scans ? 'yes' : 'no'}</p>
      {/* {chapter?.scans && <MangaPDF chapter={chapter?.scans} />} */}
    </div>
  );
}

export default ChapterPage;
