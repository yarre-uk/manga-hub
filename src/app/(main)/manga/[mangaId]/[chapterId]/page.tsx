'use client';

type PageProps = {
  params: {
    mangaId: string;
    chapterId: string;
  };
};

function Page({ params: { mangaId, chapterId } }: PageProps) {
  return (
    <div className="px-16 pt-8">
      <p>Chapter info</p>
      <p>Manga id: {mangaId}</p>
      <p>Chapter id: {chapterId}</p>
    </div>
  );
}

export default Page;
