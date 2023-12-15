import { useEffect, useState } from 'react';

import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

import { BeatLoader } from '@/shared/components/lib';
import Comment from '@/shared/models/comment';
import { axios } from '@/shared/utils/axios';

type CommentsProps = {
  mangaId: string;
};

function Comments({ mangaId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async () => {
    const res = await axios.get<Comment[]>(`Comments`, {
      params: { MangaId: mangaId },
    });

    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl">Comments</p>
      <CommentForm mangaId={mangaId} refetchData={fetchComments} />
      <div className="mb-16 flex flex-col gap-4">
        {comments?.length !== 0 ? (
          comments?.map((comment, index) => (
            <CommentCard
              key={index}
              refetchData={fetchComments}
              comment={comment}
            />
          ))
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
