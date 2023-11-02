'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ChangePasswordDTO, ChangePasswordForm } from './types';

import Input from '@/shared/components/input';
import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import { PasswordRegex } from '@/shared/constants/validationConstants';
import { axios } from '@/shared/lib/axios';

const validationSchema = yup
  .object({
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password minimal length is 8')
      .matches(
        PasswordRegex,
        'Password may contain only latin characters, numbers and special characters.',
      ),
    confirmPassword: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password minimal length is 8')
      .matches(
        PasswordRegex,
        'Password may contain only latin characters, numbers and special characters.',
      ),
  })
  .required();

function ChangePasswordPage() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordForm>({
    resolver: yupResolver(validationSchema) as Resolver<
      ChangePasswordForm,
      unknown
    >,
  });

  useEffect(() => {
    (async () => {
      try {
        await axios.get('api/User/request-reset-password', {
          params: { token },
        });
      } catch (e) {
        console.error(e);

        toast({
          title: 'Error occurred!',
          variant: 'destructive',
          description: 'Your token is invalid, please try again from the start',
        });

        router.push('/');
      }
    })();
  }, [token]);

  const onSubmit: SubmitHandler<ChangePasswordForm> = async (data) => {
    try {
      await axios.post<unknown, unknown, ChangePasswordDTO>(
        'api/User/reset-password',
        {
          ...data,
          token,
        },
      );

      toast({
        title: 'Success',
        description: 'Your password has been changed successfully',
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
          type="password"
          label="password"
          register={register}
          error={errors?.password?.message}
        />
        <Input
          type="password"
          label="confirmPassword"
          register={register}
          error={errors?.confirmPassword?.message}
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

export default ChangePasswordPage;
