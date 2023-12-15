import { Card } from '@/shared/components/ui/card';
import Comment from '@/shared/models/comment';

type CommentCardProps = {
  comment: Comment;
  refetchData?: () => void;
};

function CommentCard({ comment }: CommentCardProps) {
  // const handleEdit = async () => {
  //   router.push(
  //     `${ROUTE.EDIT_CHAPTER}?chapterId=${chapter.chapterId}&mangaId=${mangaId}`,
  //   );
  // };

  // const handleDelete = async () => {
  //   try {
  //     await axiosAuth.delete('/Chapters', {
  //       params: { chapterId: comment.id },
  //     });

  //     toast({
  //       title: 'Success',
  //       description: 'Comment has been deleted',
  //     });

  //     refetchData();
  //   } catch (error) {
  //     toast({
  //       title: 'Error',
  //       variant: 'destructive',
  //       description: 'Something went wrong.',
  //     });
  //   }
  // };

  return (
    <div className="flex flex-row gap-4">
      <Card className="z-0 flex w-full cursor-pointer flex-row items-center justify-between p-2 px-8">
        <p>
          {comment.body} - {new Date(comment.createdDate).toLocaleDateString()}
        </p>
      </Card>
    </div>
  );
}

export default CommentCard;
