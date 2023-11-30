type Chapter = {
  chapterId: string;
  title: string;
  scans: string;
  chapterNumber: number;
  createdOn: Date;
  lastUpdatedOn?: Date;
  mangaId: string;
};

export default Chapter;
