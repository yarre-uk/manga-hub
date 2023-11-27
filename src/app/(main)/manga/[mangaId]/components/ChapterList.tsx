import { ChapterDTO } from '../types';

type ChapterListProps = {
  chapters: ChapterDTO[];
};

function ChapterList({ chapters }: ChapterListProps) {
  return (
    <div>
      {chapters?.map((chapter, index) => (
        <p key={chapter.chapterId}>
          {index + 1}: {chapter.title}
        </p>
      ))}
    </div>
  );
}

export default ChapterList;
