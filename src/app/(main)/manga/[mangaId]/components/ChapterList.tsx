import { ChapterDTO } from '../types';

import { Card } from '@/shared/components/ui/card';

type ChapterListProps = {
  chapters: ChapterDTO[];
};

function ChapterList({ chapters }: ChapterListProps) {
  return (
    <>
      {chapters?.map((chapter, index) => (
        <Card className="p-4" key={chapter.chapterId}>
          <p>
            {index + 1}: {chapter.title}
          </p>
        </Card>
      ))}
    </>
  );
}

export default ChapterList;
