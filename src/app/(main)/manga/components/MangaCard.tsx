import { MangaDTO } from '../types';

type MangaCardProps = {
  manga: MangaDTO;
};

function MangaCard({ manga }: MangaCardProps) {
  return (
    <div className="flex flex-col gap-6 pt-10">
      <p className="text-center text-2xl">Manga List</p>
      <p>{JSON.stringify(manga)}</p>
    </div>
  );
}

export default MangaCard;
