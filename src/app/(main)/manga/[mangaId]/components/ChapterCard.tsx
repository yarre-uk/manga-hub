import { LucideUpload, Edit, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
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
  refetchData: () => void;
};

function ChapterCard({
  chapter,
  index,
  mangaId,
  refetchData,
}: ChapterListProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const axiosAuth = useAxiosAuth();
  const { toast } = useToast();
  const router = useRouter();

  const { data: session } = useSession();

  // const handleEdit = async () => {};

  const handleDelete = async () => {
    try {
      await axiosAuth.delete('/Chapters', {
        params: { chapterId: chapter.chapterId },
      });

      toast({
        title: 'Success',
        description: 'Chapter has been deleted',
      });

      refetchData();
    } catch (error) {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Something went wrong.',
      });
    }
  };

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
      {session?.user?.accessToken ? (
        <>
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
          <Button
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              e.preventDefault();
              fileInputRef?.current.click();
            }}
          >
            <Edit size={20} />
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            <X size={20} />
          </Button>
          <input
            type="file"
            id="fileUpload"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageChange}
          />
        </>
      ) : null}
    </div>
  );
}

export default ChapterCard;
