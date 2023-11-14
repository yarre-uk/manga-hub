'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  CopyrightText,
  ForgotPasswordButton,
  Form,
  FormFooter,
  FormSection,
  HaveAccountText,
  Heading,
  PictureSection,
  Picture,
  SignPageWrapper,
  SignInButton,
  Subheading,
  SubmitButton,
  OrText,
  Control,
  BackButton,
  FormContentWrapper,
} from './styles';

import { SignInForm } from '@/containers/sign-in/types';
import { GoogleSignButton } from '@/shared/components';
import { ROUTE } from '@/shared/constants/routes';
import { PasswordRegex } from '@/shared/constants/validationConstants';

const validationSchema = yup
  .object({
    login: yup.string().required('Login required').min(4),
    password: yup
      .string()
      .required('No password provided.')
      .min(4, 'Password minimal length is 4')
      .matches(
        PasswordRegex,
        'Password may contain only latin characters, numbers and special characters.',
      ),
  })
  .required();

export default function SignInContainer() {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(validationSchema) as Resolver<SignInForm, unknown>,
  });

  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    await signIn('credentials', {
      login: data.login,
      password: data.password,
      redirect: true,
    });

    setTimeout(() => {
      if (!searchParams.get('error')) {
        router.replace(searchParams.get('callbackUrl') ?? ROUTE.HOME);
      }
    }, 50);
  };

  useEffect(() => {
    if (session?.user) {
      router.push(ROUTE.HOME);
    }
  }, [session, router]);

  return (
    <SignPageWrapper>
      <PictureSection>
        <Picture src="sign/signin.jpg" alt="bg-image" />
      </PictureSection>

      <FormSection>
        <BackButton href={ROUTE.HOME}>
          <svg
            viewBox="0 0 24 24"
            height="3rem"
            width="3rem"
            aria-hidden="true"
            focusable="false"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.29 8.71 9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z" />
          </svg>
        </BackButton>

        <FormContentWrapper>
          <Heading>{"Welcome back! Let's sign in to your account"}</Heading>
          <Subheading>
            Join our vibrant community and explore exciting features
          </Subheading>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <GoogleSignButton>Sign in with Google</GoogleSignButton>

            <OrText>Or</OrText>

            <Control
              id="login"
              type="string"
              placeholder="Login"
              errorMessage={errors?.login?.message}
              {...formRegister('login')}
            />

            <Control
              id="password"
              type="password"
              placeholder="Password"
              errorMessage={errors?.password?.message}
              {...formRegister('password')}
            />

            <SubmitButton bgtype="signin" type="submit">
              Login
            </SubmitButton>

            <FormFooter>
              <HaveAccountText>
                {"Don't have an account"}
                <SignInButton href={ROUTE.SIGN_UP}>Sign up</SignInButton>
              </HaveAccountText>

              <ForgotPasswordButton href={ROUTE.FORGOT_PASSWORD} type="button">
                Forgot password
              </ForgotPasswordButton>
            </FormFooter>
          </Form>
          <CopyrightText>© PZPI-21-5 PseudoTeam</CopyrightText>
        </FormContentWrapper>
      </FormSection>
    </SignPageWrapper>
  );
}
