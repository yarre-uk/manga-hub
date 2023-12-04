'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ForgotPasswordDTO } from './types';

import { Input } from '@/shared/components/FormComponents';
import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import { ROUTE } from '@/shared/constants/routes';
import { axios } from '@/shared/utils/axios';

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
      await axios.post('User/forgot-password', data);

      toast({
        title: 'Success',
        description: 'Check your email for changing password',
      });

      router.push(ROUTE.HOME);
    } catch (error) {
      toast({
        title: 'Error occurred!',
        variant: 'destructive',
        // description: error.errors, TODO doesn't work
      });
    }
  };
  return (
    <div className="flex flex-col items-center gap-6 pt-10">
      <p className="text-2xl">Change Password Form</p>
      <form
        className="flex w-[50%] flex-col gap-6 lg:w-[50rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="email"
          register={register}
          error={errors?.email?.message}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
