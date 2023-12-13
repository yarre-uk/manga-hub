'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { MangaDTO } from '../types';

import { Card, CardDescription, CardTitle } from '@/shared/components/ui/card';
import { Genre, GenreType } from '@/shared/models/genre';
import bytesToFile from '@/shared/utils/bytesToFile';
import capitalizedWords from '@/shared/utils/capitalizedWords';

type MangaCardProps = {
  data: MangaDTO;
};

function truncateTitle(title: string, length: number) {
  return title.length > length ? title.substring(0, length) + '...' : title;
}

function MangaCard({ data }: MangaCardProps) {
  const router = useRouter();

  function getGenreName(value: GenreType): string | undefined {
    for (const prop in Genre) {
      if (Genre[prop as keyof typeof Genre] == value) {
        return prop;
      }
    }

    return undefined;
  }

  return (
    <Card
      onClick={() => {
        router.push(`manga/${data.mangaId}`);
      }}
      className="flex h-[200px] w-[400px] justify-between px-4"
    >
      <div className="flex flex-col gap-4 pt-4">
        <CardTitle>{truncateTitle(data.title, 15)}</CardTitle>
        <CardDescription className="text-primary">
          Genre: {capitalizedWords(getGenreName(data.genre))}
        </CardDescription>
        <CardDescription>Rating: {data.rating} / 5</CardDescription>
      </div>
      <div className="relative my-auto flex h-[175px] w-[125px] items-center justify-center">
        <Image
          className="h-full w-full rounded-lg object-cover"
          src={bytesToFile(data.coverImage, 'image/png')}
          width={225}
          height={300}
          alt={`${data.title} cover image`}
        />
      </div>
    </Card>
  );
}

export default MangaCard;
