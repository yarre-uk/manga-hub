import { Edit, X } from 'lucide-react';
import { useSession } from 'next-auth/react';

import { Button } from '@/shared/components/ui/button';
import { Card } from '@/shared/components/ui/card';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/hooks/useAxiosAuth';
import Comment from '@/shared/models/comment';

type CommentCardProps = {
  comment: Comment;
  onDelete?: () => void;
  onUpdate?: (comment: Comment) => void;
};

function CommentCard({ comment, onDelete, onUpdate }: CommentCardProps) {
  const axiosAuth = useAxiosAuth();
  const { toast } = useToast();
  const { data: session } = useSession();

  const handleEdit = async () => {
    onUpdate(comment);
  };

  const handleDelete = async () => {
    try {
      await axiosAuth.delete(`/Comments/${comment.id}`);

      toast({
        title: 'Success',
        description: 'Comment has been deleted',
      });

      onDelete();
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
      <Card className="flex w-full items-center justify-between px-4">
        <div className="flex flex-col gap-2 p-2 px-4">
          <p className="text-lg font-semibold">
            {comment.login}{' '}
            {comment.userId == session?.user?.id ? (
              <span className="text-sm text-primary">(You)</span>
            ) : null}
          </p>
          <pre className="font-rubick ">{comment.body}</pre>
          <p className="text-xs text-primary">
            {new Date(comment.createdDate).toLocaleString()}
          </p>
        </div>
        {comment.userId == session?.user?.id ? (
          <div className="flex flex-col">
            <Button variant="outline" onClick={handleDelete}>
              <X />
            </Button>
            <Button variant="outline" onClick={handleEdit}>
              <Edit />
            </Button>
          </div>
        ) : null}
      </Card>
    </div>
  );
}

export default CommentCard;
