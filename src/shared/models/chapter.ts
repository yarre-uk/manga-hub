type Chapter = {
  chapterId: string;
  title: string;
  scans: Uint8Array;
  chapterNumber: number;
  createdOn: Date;
  lastUpdatedOn?: Date;
  mangaId: string;
};

export default Chapter;
