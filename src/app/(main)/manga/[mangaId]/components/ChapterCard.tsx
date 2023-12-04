import { LucideUpload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import { ChapterDTO } from '../types';

import { Button } from '@/shared/components/ui/button';
import { Card } from '@/shared/components/ui/card';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/hooks/useAxiosAuth';

type ChapterListProps = {
  chapter: ChapterDTO;
  index: number;
  mangaId: string;
};

function ChapterCard({ chapter, index, mangaId }: ChapterListProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const axiosAuth = useAxiosAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append('ChapterId', chapter.chapterId);
    formData.append('ChapterFile', file);

    try {
      await axiosAuth.post('/Chapters/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast({
        title: 'Success',
        description: 'Chapter scans has been uploaded',
      });
    } catch (error) {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Something went wrong.',
      });
    }
  };

  return (
    <div className="flex flex-row gap-4">
      <Card
        className="z-0 flex w-full flex-row items-center justify-between p-2 px-8"
        onClick={() => {
          router.push(`/manga/${mangaId}/${chapter.chapterId}`);
        }}
      >
        <p>
          {index + 1}: {chapter.title}
        </p>
      </Card>
      <Button
        variant="outline"
        className="z-50"
        onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          e.preventDefault();
          fileInputRef?.current.click();
        }}
      >
        <LucideUpload size={20} />
      </Button>
      <input
        type="file"
        id="fileUpload"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ChapterCard;
