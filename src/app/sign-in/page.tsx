'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SignInForm } from './types';

import Input from '@/shared/components/input';
import { Button } from '@/shared/components/ui/button';
import { PasswordRegex } from '@/shared/constants/validationConstants';

type SignInProps = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};

const validationSchema = yup
  .object({
    login: yup.string().required('Login required').min(4),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password minimal length is 8')
      .matches(
        PasswordRegex,
        'Password may contain only latin characters, numbers and special characters.',
      ),
  })
  .required();

function SignInPage(props: SignInProps) {
  const router = useRouter();
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(validationSchema) as Resolver<SignInForm, unknown>,
  });

  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    const res = await signIn('credentials', {
      login: data.login,
      password: data.password,
      redirect: false,
    });

    if (!res?.error) {
      router.push(props.callbackUrl ?? 'http://localhost:3000');
    }
  };

  useEffect(() => {
    if (session?.user) {
      router.push('/');
    }
  }, [session]);

  return (
    <div className="flex gap-6 items-center pt-10 flex-col">
      <p className="text-2xl">Sign In</p>
      <form
        className="flex flex-col gap-6 w-[50%] lg:w-[50rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {!!props.error && (
          <p className="bg-red-100 text-red-600 text-center p-2">
            Authentication Failed
          </p>
        )}
        <Input
          id="login"
          label="login"
          register={register}
          error={errors?.login?.message}
        />
        <Input
          id="password"
          label="password"
          type="password"
          register={register}
          error={errors?.password?.message}
        />

        <Button type="submit">Submit</Button>

        <hr />
        <Button
          onClick={() => {
            router.push('/forgot-password');
          }}
          variant="outline"
        >
          Forgot Password
        </Button>
      </form>
    </div>
  );
}

export default SignInPage;
