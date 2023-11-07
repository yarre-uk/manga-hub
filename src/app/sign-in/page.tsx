'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SignInForm } from './types';

import Input from '@/shared/components/input';
import { Button } from '@/shared/components/ui/button';
import Route from '@/shared/constants/routes';
import { PasswordRegex } from '@/shared/constants/validationConstants';

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

function SignInPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(validationSchema) as Resolver<SignInForm, unknown>,
  });

  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    await signIn('credentials', {
      login: data.login,
      password: data.password,
      redirect: false,
    });

    setTimeout(() => {
      router.replace(searchParams.get('callbackUrl') ?? Route.Home);
    }, 50);

    // if (!res?.error) {
    //   router.push(props.callbackUrl ?? Route.Home);
    // }
  };

  useEffect(() => {
    if (session?.user) {
      router.push(Route.Home);
    }
  }, [session, router]);

  return (
    <div className="flex flex-col items-center gap-6 pt-10">
      <p className="text-2xl">Sign In</p>
      <form
        className="flex w-[50%] flex-col gap-6 lg:w-[50rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {!!searchParams.get('error') && (
          <p className="bg-red-100 p-2 text-center text-red-600">
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
        <Button className="p-0 " type="button" variant="outline">
          <Link
            className="h-full w-full items-center p-2 text-center"
            href={Route.ForgotPassword}
          >
            Forgot Password
          </Link>
        </Button>
      </form>
    </div>
  );
}

export default SignInPage;
