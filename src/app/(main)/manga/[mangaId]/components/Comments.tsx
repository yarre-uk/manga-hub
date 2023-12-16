import { LucideArrowBigDownDash } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

import { BeatLoader } from '@/shared/components/lib';
import { Button } from '@/shared/components/ui/button';
import Comment from '@/shared/models/comment';
import { axios } from '@/shared/utils/axios';

type CommentsProps = {
  mangaId: string;
};

const PAGE_SIZE = 10;

function Comments({ mangaId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [page, setPage] = useState(1);

  const { data: session } = useSession();

  useEffect(() => {
    fetchComments().then((data) => setComments(data));
  }, []);

  const fetchComments = async (
    pageNumber?: number,
    clearPreviousComments = false,
  ) => {
    if (clearPreviousComments) {
      setComments([]);
      setPage(1);
    }

    const res = await axios.get<Comment[]>(`Comments`, {
      params: {
        MangaId: mangaId,
        'PagingModel.PageSize': PAGE_SIZE,
        'PagingModel.PageCount': pageNumber ?? 1,
      },
    });

    return res.data;
  };

  const handleLoadNewPage = async () => {
    setPage(page + 1);

    const res = await fetchComments(page + 1);

    setComments([...(comments ?? []), ...res]);
  };

  const handleCommentDelete = () => {
    fetchComments(1, true).then((data) => setComments(data));
  };

  const handleCommentAdd = () => {
    fetchComments(1, true).then((data) => setComments(data));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl">Comments</p>
      {session?.user?.accessToken && (
        <CommentForm mangaId={mangaId} refetchData={handleCommentAdd} />
      )}
      <div className="mb-16 flex flex-col gap-4">
        {comments?.length !== 0 ? (
          <>
            {comments?.map((comment, index) => (
              <CommentCard
                key={index}
                onDelete={handleCommentDelete}
                comment={comment}
              />
            ))}
            <Button
              className="mx-auto w-[500px]"
              variant="outline"
              disabled={comments?.length % 10 != 0 || comments?.length == 0}
              onClick={handleLoadNewPage}
            >
              <LucideArrowBigDownDash />
            </Button>
          </>
        ) : (
          <div className="text-center">
            <BeatLoader size={30} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Comments;
