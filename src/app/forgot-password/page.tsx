'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ForgotPasswordDTO } from './types';

import Input from '@/shared/components/input';
import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import axios from '@/shared/lib/axios';

const validationSchema = yup
  .object({
    email: yup
      .string()
      .required('Email required')
      .email('Incorrect email')
      .min(5, 'Email minimum length is 5'),
  })
  .required();

function ForgotPasswordPage() {
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordDTO>({
    resolver: yupResolver(validationSchema) as Resolver<
      ForgotPasswordDTO,
      unknown
    >,
  });

  const onSubmit: SubmitHandler<ForgotPasswordDTO> = async (data) => {
    try {
      await axios.post('api/User/forgot-password', data);

      toast({
        title: 'Success',
        description: 'Check your email for changing password',
      });

      router.push('/');
    } catch (error) {
      toast({
        title: 'Error occurred!',
        variant: 'destructive',
        // description: error.errors, TODO doesn't work
      });
    }
  };
  return (
    <div className="flex gap-6 items-center pt-10 flex-col">
      <p className="text-2xl">Change Password Form</p>
      <form
        className="flex flex-col gap-6 w-[50%] lg:w-[50rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="email"
          register={register}
          error={errors?.email?.message}
        />

        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
