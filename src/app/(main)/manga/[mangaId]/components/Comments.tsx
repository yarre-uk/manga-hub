import { LucideArrowBigDownDash } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import MessageDialog from './CommentsEditDialog';

import { BeatLoader } from '@/shared/components/lib';
import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/hooks/useAxiosAuth';
import Comment from '@/shared/models/comment';
import { axios } from '@/shared/utils/axios';

type CommentsProps = {
  mangaId: string;
};

const PAGE_SIZE = 10;

function Comments({ mangaId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [page, setPage] = useState(1);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [commentForEdit, setCommentForEdit] = useState<Comment>();

  const { data: session } = useSession();
  const axiosAuth = useAxiosAuth();
  const { toast } = useToast();

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

  const resetCommentsAndFetch = () => {
    fetchComments(1, true).then((data) => setComments(data));
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogSubmit = async (id: string, message: string) => {
    try {
      await axiosAuth.post('/Comments/update', { id, body: message });

      handleDialogClose();
      resetCommentsAndFetch();
      toast({ title: 'Success', description: 'Comment has been updated' });
    } catch (error) {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Something went wrong.',
      });
    }

    setDialogOpen(false);
  };

  const handleCommentUpdate = (comment: Comment) => {
    setCommentForEdit(comment);
    setDialogOpen(true);
  };

  return (
    <div className="flex flex-col gap-2">
      {commentForEdit && (
        <MessageDialog
          commentForEdit={commentForEdit}
          isOpen={isDialogOpen}
          onClose={handleDialogClose}
          onSubmit={handleDialogSubmit}
        />
      )}
      <p className="text-2xl">Comments</p>
      {session?.user?.accessToken && (
        <CommentForm mangaId={mangaId} refetchData={resetCommentsAndFetch} />
      )}
      <div className="mb-16 flex flex-col gap-4">
        {comments?.length !== 0 ? (
          <>
            {comments?.map((comment, index) => (
              <CommentCard
                key={index}
                onDelete={resetCommentsAndFetch}
                onUpdate={handleCommentUpdate}
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
