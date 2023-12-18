import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '@/shared/components/ui/button';
import { Textarea } from '@/shared/components/ui/textarea';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/hooks/useAxiosAuth';

const schema = yup.object().shape({
  comment: yup.string().required('Comment is required'),
});

type CommentFormProps = {
  mangaId: string;
  refetchData?: () => void;
};

function CommentForm({ mangaId, refetchData }: CommentFormProps) {
  const axiosAuth = useAxiosAuth();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { comment: string }) => {
    try {
      await axiosAuth.post('/Comments', {
        body: data.comment,
        mangaId,
      });

      toast({
        title: 'Success',
        description: 'Comment has been added',
      });

      setValue('comment', '');
      refetchData();
    } catch (error) {
      console.error(error);

      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Something went wrong.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea {...register('comment')} />
      {errors?.comment?.message && (
        <p className="ml-2 text-red-500">{errors?.comment?.message}</p>
      )}
      <Button className="mt-4 w-full" variant="secondary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default CommentForm;
