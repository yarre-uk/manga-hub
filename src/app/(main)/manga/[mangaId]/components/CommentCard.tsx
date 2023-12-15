import { X } from 'lucide-react';
import { useSession } from 'next-auth/react';

import { Button } from '@/shared/components/ui/button';
import { Card } from '@/shared/components/ui/card';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/hooks/useAxiosAuth';
import Comment from '@/shared/models/comment';

type CommentCardProps = {
  comment: Comment;
  refetchData?: () => void;
};

function CommentCard({ comment, refetchData }: CommentCardProps) {
  const axiosAuth = useAxiosAuth();
  const { toast } = useToast();
  const { data: session } = useSession();

  // const handleEdit = async () => {
  //   router.push(
  //     `${ROUTE.EDIT_CHAPTER}?chapterId=${chapter.chapterId}&mangaId=${mangaId}`,
  //   );
  // };

  const handleDelete = async () => {
    try {
      await axiosAuth.delete(`/Comments/${comment.id}`);

      toast({
        title: 'Success',
        description: 'Comment has been deleted',
      });

      refetchData();
    } catch (error) {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Something went wrong.',
      });
    }
  };

  return (
    <div className="flex flex-row gap-4">
      <Card className="z-0 flex w-full cursor-pointer flex-row items-center justify-between p-2 px-8">
        <p>
          {comment.body} - {new Date(comment.createdDate).toLocaleDateString()}
        </p>
        {comment.userId == session?.user?.id ? (
          <Button variant="outline" onClick={handleDelete}>
            <X />
          </Button>
        ) : null}
      </Card>
    </div>
  );
}

export default CommentCard;
