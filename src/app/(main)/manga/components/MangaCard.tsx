'use client';

import React from 'react';

import {
  Card,
  CardDescription,
  CardTitle,
} from '../../../../shared/components/ui/card';
import { getGenreName } from '../../../../shared/models/genre';
import { MangaDTO } from '../types';

type MangaCardProps = {
  data: MangaDTO;
};

function truncateTitle(title: string, length: number) {
  return title.length > length ? title.substring(0, length) + '...' : title;
}

function MangaCard({ data }: MangaCardProps) {
  return (
    <Card className="flex h-[200px] w-[400px] justify-between px-4">
      <div className="flex flex-col gap-2 pt-4">
        <CardTitle>{truncateTitle(data.title, 20)}</CardTitle>
        <CardDescription className="text-primary">
          {getGenreName(data.genre)}
        </CardDescription>
      </div>
      <div className="flex items-center justify-center">
        <Card className="h-[175px] w-[125px]" />
      </div>
    </Card>
  );
}

export default MangaCard;
