import { BookPlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import ChapterCard from './ChapterCard';
import { ChapterDTO } from '../types';

import { BeatLoader } from '@/shared/components/lib';
import { Button } from '@/shared/components/ui/button';

type ChaptersProps = {
  className?: string;
  mangaId: string;
  chapters: ChapterDTO[];
};

function Chapters({ chapters, mangaId, className = '' }: ChaptersProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl">Chapters</p>
      <div>
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
      </div>
      <div className={`${className} flex flex-col gap-4`}>
        {chapters?.length !== 0 ? (
          chapters?.map((chapter, index) => (
            <ChapterCard
              key={chapter.chapterId}
              index={index}
              chapter={chapter}
              mangaId={mangaId}
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
