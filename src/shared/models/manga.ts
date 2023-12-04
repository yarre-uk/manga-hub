import { GenreType } from './genre';

type Manga = {
  mangaId: string;
  title: string;
  genre: GenreType;
  description: string;
  releasedOn: Date;
  createdOn: Date;
  lastUpdatedOn?: Date;
  coverImage?: string;
  userId?: number;
  rating: number;
};

export default Manga;
