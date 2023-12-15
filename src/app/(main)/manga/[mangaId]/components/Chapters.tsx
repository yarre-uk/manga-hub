import { BookPlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import ChapterCard from './ChapterCard';
import { ChapterDTO } from '../types';

import { BeatLoader } from '@/shared/components/lib';
import { Button } from '@/shared/components/ui/button';
import { axios } from '@/shared/utils/axios';

type ChaptersProps = {
  mangaId: string;
};

function Chapters({ mangaId }: ChaptersProps) {
  const [chapters, setChapters] = useState<ChapterDTO[] | null>(null);

  const router = useRouter();
  const { data: session } = useSession();

  const fetchChapters = async () => {
    const res = await axios.get<ChapterDTO[]>(`Chapters/get-manga-chapters`, {
      params: { mangaId },
    });

    setChapters(res.data);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl">Chapters</p>
      <div>
        {session?.user?.accessToken ? (
          <Button
            variant="outline"
            onClick={() => {
              router.push(`/chapter/add?mangaId=${mangaId}`);
            }}
            className="w-full p-6"
          >
            <p className="flex flex-row gap-4">
              Add Chapter <BookPlusIcon />
            </p>
          </Button>
        ) : null}
      </div>
      <div className="flex flex-col gap-4">
        {chapters?.length !== 0 ? (
          chapters?.map((chapter, index) => (
            <ChapterCard
              key={chapter.chapterId}
              index={index}
              chapter={chapter}
              mangaId={mangaId}
              refetchData={fetchChapters}
            />
          ))
        ) : (
          <div className="text-center">
            <BeatLoader size={30} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Chapters;
