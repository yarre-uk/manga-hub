'use client';

import { SwitchCameraIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react';

import { ChapterDTO } from './types';

import { FullPageLoader } from '@/shared/components/lib';
import { Button } from '@/shared/components/ui/button';
import { ROUTE } from '@/shared/constants/routes';
import useAxiosAuth from '@/shared/hooks/useAxiosAuth';
import { getGenreName } from '@/shared/models/genre';
import Manga from '@/shared/models/manga';
import { axios } from '@/shared/utils/axios';
import bytesToFile from '@/shared/utils/bytesToImage';
import capitalizedWords from '@/shared/utils/capitalizedWords';

type PageProps = {
  params: {
    mangaId: string;
  };
};

function Page({ params: { mangaId } }: PageProps) {
  const axiosAuth = useAxiosAuth();
  const router = useRouter();

  const [manga, setManga] = useState<Manga | null>(null);
  const [chapters, setChapters] = useState<ChapterDTO[] | null>(null);

  const { data: session } = useSession();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchManga = async (mangaId: string) => {
    const res = await axios.get<Manga>(`Mangas`, {
      params: { mangaId },
    });

    return res.data;
  };

  const fetchChapters = async (mangaId: string) => {
    const res = await axios.get<ChapterDTO[]>(`Chapters/get-manga-chapters`, {
      params: { mangaId },
    });

    return res.data;
  };

  const handleDelete = async () => {
    try {
      await axiosAuth.delete(`/Mangas`, { params: { mangaId } });

      router.push(ROUTE.MANGA);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchManga(mangaId).then(setManga);
    fetchChapters(mangaId).then(setChapters);
  }, [mangaId]);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append('CoverImage', file);
    formData.append('MangaId', mangaId);

    try {
      const response = await axiosAuth.post(
        '/Mangas/upload-cover-image',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.status === 200) {
        setManga(null);
        fetchManga(mangaId).then(setManga);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!manga) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <FullPageLoader />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 px-32 pt-8 ">
      <div id="details" className="flex w-full flex-row justify-between">
        <div id="info" className="flex flex-col justify-between ">
          <div className="flex flex-col gap-1">
            <h2 className="mb-4 text-2xl font-bold">{manga.title}</h2>
            <p className="text-primary">
              Genre: {capitalizedWords(getGenreName(manga.genre))}
            </p>
            <p>Description: {manga.description}</p>
            <p>
              Released on: {new Date(manga.releasedOn).toLocaleDateString()}
            </p>
            <p>Rating: {manga.rating} / 5</p>
          </div>

          {session?.user?.accessToken && (
            <Button
              className="mt-4"
              variant="destructive"
              onClick={handleDelete}
            >
              Delete Manga
            </Button>
          )}

          <div className="flex flex-col">
            {session?.user?.accessToken && (
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => {
                  router.push(`/manga/edit?mangaId=${mangaId}`);
                }}
              >
                Edit Manga
              </Button>
            )}

            <Button
              className="mt-4"
              onClick={() => {
                router.push(
                  `${ROUTE.MANGA}/${mangaId}/${chapters?.[0].chapterId}`,
                );
              }}
            >
              Read Now
            </Button>
          </div>
        </div>

        <div id="cover-image" className="flex flex-col gap-2">
          <div id="image" className=" h-[300px] w-[225px] ">
            <Image
              className="h-full w-full rounded-lg object-cover"
              src={bytesToFile(manga.coverImage, 'image/png')}
              width={225}
              height={300}
              alt={`${manga.title} cover image`}
            />
          </div>

          {session?.user?.accessToken && (
            <div id="edit-image">
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="w-full"
              >
                <SwitchCameraIcon />
              </Button>
              <input
                type="file"
                id="fileUpload"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          )}
        </div>
      </div>

      {/* <Chapters mangaId={mangaId} chapters={chapters} /> */}
    </div>
  );
}

export default Page;
