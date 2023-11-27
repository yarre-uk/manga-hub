'use client';

type PageProps = {
  params: {
    mangaId: string;
    chapterId: string;
  };
};

function Page({ params: { mangaId } }: PageProps) {
  return (
    <div className="px-16 pt-8">
      <p>Edit manga page</p>
      <p>Manga id: {mangaId}</p>
    </div>
  );
}

export default Page;
