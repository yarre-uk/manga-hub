'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { MangaDTO } from '../types';

import { Card, CardDescription, CardTitle } from '@/shared/components/ui/card';
import { getGenreName } from '@/shared/models/genre';

type MangaCardProps = {
  data: MangaDTO;
};

function truncateTitle(title: string, length: number) {
  return title.length > length ? title.substring(0, length) + '...' : title;
}

function MangaCard({ data }: MangaCardProps) {
  const router = useRouter();

  const byteCharacters = atob(data.coverImage);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'image/png' });
  const url = URL.createObjectURL(blob);

  return (
    <Card
      onClick={() => {
        router.push(`manga/${data.mangaId}`);
      }}
      className="flex h-[200px] w-[400px] justify-between px-4"
    >
      <div className="flex flex-col gap-4 pt-4">
        <CardTitle>{truncateTitle(data.title, 20)}</CardTitle>
        <CardDescription className="text-primary">
          {getGenreName(data.genre)}
        </CardDescription>
        <CardDescription>Rating: {data.rating} / 5</CardDescription>
      </div>
      <div className="relative my-auto flex h-[175px] w-[125px] items-center justify-center rounded">
        <Image
          layout="fill"
          objectFit="cover"
          src={url}
          alt={`${data.title} cover image`}
        />
      </div>
    </Card>
  );
}

export default MangaCard;
