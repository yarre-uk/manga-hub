'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  CopyrightText,
  Form,
  FormFooter,
  FormSection,
  HaveAccountText,
  Heading,
  PictureSection,
  Picture,
  SignPageWrapper,
  SignUpButton,
  Subheading,
  SubmitButton,
  OrText,
  Control,
  BackButton,
  FormContentWrapper,
} from './styles';

import { GoogleSignButton, ValidationControl } from '@/shared/components';
import { useToast } from '@/shared/components/ui/use-toast';
import { ROUTE } from '@/shared/constants/routes';
import { PasswordRegex } from '@/shared/constants/validationConstants';
import { axios } from '@/shared/lib/axios';
import { TRegisterFormValues } from '@/shared/types/auth';

const validationSchema = yup
  .object({
    email: yup
      .string()
      .required('Email required')
      .email('Incorrect email')
      .min(5, 'Email minimum length is 5'),
    login: yup.string().required('Login required').min(4),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password minimal length is 8')
      .matches(
        PasswordRegex,
        'Password may contain only latin characters, numbers and special characters.',
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  })
  .required();

export default function SignIpContainer() {
  const { toast } = useToast();
  const router = useRouter();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    // getValues,
  } = useForm<TRegisterFormValues>({
    resolver: yupResolver(validationSchema) as Resolver<
      TRegisterFormValues,
      unknown
    >,
  });

  const onSubmit: SubmitHandler<TRegisterFormValues> = async (data) => {
    try {
      await axios.post('api/User/register', {
        ...data,
        userId: 0,
        // birthDate: new Date(data.birthDate).toISOString(),
        avatar: '',
      });

      toast({
        title: 'Success',
        description: 'Check your email for confirmation before login',
      });

      router.push(ROUTE.HOME);
    } catch (error) {
      toast({
        title: 'Error occurred',
        variant: 'destructive',
        // description: error.errors, TODO doesn't work
      });
    }
  };

  // props = loginOrEmail: string
  const handleLoginEmailCheck = async () => {
    // if (!loginOrEmail.trim()) return false;
    // const response = await AuthAPI.checkUserExists(loginOrEmail);
    // return response.data.checkStatus;
    return true;
  };

  return (
    <SignPageWrapper>
      <PictureSection>
        <Picture src="sign/signup.jpg" alt="Profile Picture" />
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
          <Heading>{"Let's create your account"}</Heading>
          <Subheading>
            {"We'd love to have you Join to our lovely community"}
          </Subheading>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <GoogleSignButton>Sign up with Google</GoogleSignButton>

            <OrText>Or</OrText>

            <ValidationControl
              id="email"
              type="string"
              placeholder="Email"
              takenMessage="Email already taken"
              errorMessage={errors.email?.message}
              //getValues().email
              onCheck={() => handleLoginEmailCheck()}
              {...formRegister('email')}
            />

            <ValidationControl
              id="login"
              type="string"
              placeholder="Login"
              takenMessage="Login already taken"
              errorMessage={errors.login?.message}
              //getValues().login
              onCheck={() => handleLoginEmailCheck()}
              {...formRegister('login')}
            />

            <Control
              id="password"
              type="password"
              placeholder="Password"
              errorMessage={errors?.password?.message}
              {...formRegister('password')}
            />

            <Control
              id="confirm_password"
              type="password"
              placeholder="Confirm password"
              errorMessage={errors?.confirm_password?.message}
              {...formRegister('confirm_password')}
            />

            <SubmitButton bgtype="signup" type="submit">
              Register
            </SubmitButton>

            <FormFooter>
              <HaveAccountText>
                Already have an account?{' '}
                <SignUpButton href={ROUTE.SIGN_IN}>Sign in</SignUpButton>
              </HaveAccountText>
            </FormFooter>
          </Form>
          <CopyrightText>© PZPI-21-5 PseudoTeam</CopyrightText>
        </FormContentWrapper>
      </FormSection>
    </SignPageWrapper>
  );
}
