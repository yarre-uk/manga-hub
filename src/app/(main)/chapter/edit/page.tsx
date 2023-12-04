import { useRouter } from 'next/router';

function Page() {
  const router = useRouter();
  const { mangaId, chapterId } = router.query;

  return (
    <div>
      <h1>Page</h1>
      <p>Param1: {mangaId}</p>
      <p>Param2: {chapterId}</p>
    </div>
  );
}

export default Page;
