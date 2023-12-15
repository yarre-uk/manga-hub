import { BookPlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import ChapterCard from './ChapterCard';
import { ChapterDTO } from '../types';

import { BeatLoader } from '@/shared/components/lib';
import { Button } from '@/shared/components/ui/button';

type ChaptersProps = {
  className?: string;
  mangaId: string;
  chapters: ChapterDTO[];
  refetchData: () => void;
};

function Chapters({
  chapters,
  mangaId,
  className = '',
  refetchData,
}: ChaptersProps) {
  const router = useRouter();
  const { data: session } = useSession();

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
      <div className={`${className} flex flex-col gap-4`}>
        {chapters?.length !== 0 ? (
          chapters?.map((chapter, index) => (
            <ChapterCard
              key={chapter.chapterId}
              index={index}
              chapter={chapter}
              mangaId={mangaId}
              refetchData={refetchData}
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
