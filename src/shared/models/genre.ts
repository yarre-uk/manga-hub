export const Genre = {
  Shonen: 1,
  Seinen: 3,
  Isekai: 7,
  Sports: 9,
  Horror: 10,
  Mystery: 11,
  Historical: 12,
  SliceOfLife: 13,
  Fantasy: 14,
  ScienceFiction: 15,
  Supernatural: 16,
  Adventure: 17,
  Psychological: 18,
  MartialArts: 25,
  Music: 26,
  SchoolLife: 27,
  Dystopian: 29,
  Parody: 31,
  TimeTravel: 32,
  Cyberpunk: 34,
  PostApocalyptic: 35,
  Cooking: 36,
  Military: 37,
} as const;

type ObjectValues<T> = T[keyof T];

export type GenreType = ObjectValues<typeof Genre>;
