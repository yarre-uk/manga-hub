'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ChangePasswordDTO, ChangePasswordForm } from './types';

import { Input } from '@/shared/components/FormComponents';
import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import { ROUTE } from '@/shared/constants/routes';
import { PasswordRegex } from '@/shared/constants/validationConstants';
import { axios } from '@/shared/utils/axios';

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

        router.push(ROUTE.HOME);
      }
    })();
  }, [token, router, toast]);

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

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default ChangePasswordPage;
