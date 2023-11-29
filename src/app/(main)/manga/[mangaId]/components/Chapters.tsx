import { BookPlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import ChapterList from './ChapterList';
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

  // const handleImageChange = async (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   const file = event.target.files?.[0];

  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append('ChapterId', '00000000-0000-0000-0000-000000000000');
  //   formData.append('ChapterFile', file);

  //   try {
  //     await axiosAuth.post('/Chapters/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     toast({
  //       title: 'Success',
  //       description: 'Cover image has been updated.',
  //     });
  //   } catch (error) {
  //     toast({
  //       title: 'Error',
  //       variant: 'destructive',
  //       description: 'Something went wrong.',
  //     });
  //   }
  // };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl">Chapters</p>
      <div>
        <Button
          variant="outline"
          // onClick={() => fileInputRef.current?.click()}
          onClick={() => {
            router.push(`/chapter/add?mangaId=${mangaId}`);
          }}
          className="w-full p-6"
        >
          <p className="flex flex-row gap-4">
            Add Chapter <BookPlusIcon />
          </p>
        </Button>
        {/* <input
          type="file"
          id="fileUpload"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageChange}
        /> */}
      </div>
      <div className={`${className} flex flex-col gap-4`}>
        {chapters?.length !== 0 ? (
          <ChapterList chapters={chapters} />
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
