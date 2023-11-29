import { GenreType } from '@/shared/models/genre';

export type FormValues = {
  title: string;
  genre: string;
  description: string;
  releasedOn: Date;
  // coverImage: File;
};

export type CreateMangaDto = {
  title: string;
  genre: GenreType;
  description: string;
  releasedOn: Date;
  // coverImage: Int8Array;
};
