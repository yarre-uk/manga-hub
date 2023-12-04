import { GenreType } from '@/shared/models/genre';

export type MangaDTO = {
  mangaId: string;
  title: string;
  genre: GenreType;
  coverImage?: string;
  rating: number;
};

export type SearchParams = {
  title: string;
  genre: string;
  rating: number;
};
