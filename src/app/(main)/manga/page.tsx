import { axios } from '@/shared/utils/axios';

async function getMangaList() {
  const res = await axios.get<string>('Mangas/get-all');

  return res.data;
}

async function AdminMangaPage() {
  const manga = await getMangaList();

  console.log(manga);

  // const { toast } = useToast();
  // const axiosAuth = useAxiosAuth();

  // useEffect(() => {}, []);

  return (
    <div className="flex flex-col gap-6 pt-10">
      <p className="text-center text-2xl">Manga List</p>
      <p>{manga.length > 3 ? manga : 'nothing'}</p>
    </div>
  );
}

export default AdminMangaPage;
