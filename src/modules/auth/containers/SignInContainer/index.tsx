import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { object, string, ObjectSchema } from 'yup';

import { useAuth } from '../../hooks';

import {
  Button,
  CardForm,
  ContainerDiv,
  ErrorMessage,
  FormInput,
  FormInputPassword,
  StateSuspense,
  Title,
} from '@/components';
import { PasswordRegex } from '@/constants';
import { useLoading } from '@/hooks';
import { SignInFormValues } from '@/types';

const schema: ObjectSchema<SignInFormValues> = object({
  email: string().email('Input is invalid email').required('Email is required'),
  password: string()
    .trim()
    .min(8, 'Password must be at least 8 characters long')
    .max(32, 'Password must be at most 32 characters long')
    .matches(PasswordRegex, {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    })
    .required('Password is required'),
});

const SignInContainer = ({ onSubmit }: { onSubmit: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<SignInFormValues>(schema),
    mode: 'onChange',
  });

  const { signIn } = useAuth();

  const { loading, error, startLoading, stopLoading, errorOccurred } =
    useLoading();

  const onFormSubmit = async (data: SignInFormValues) => {
    try {
      startLoading();

      await toast.promise(signIn(data), {
        pending: 'Signing in...',
        success: 'Successfully signed in',
        error: 'Failed to sign in',
      });

      stopLoading();
      onSubmit();
    } catch (error) {
      errorOccurred(new Error('Credentials are invalid'));
    }
  };

  return (
    <ContainerDiv>
      <CardForm onSubmit={handleSubmit(onFormSubmit)}>
        <Title>Sign Up</Title>

        <ErrorMessage message={error?.message} />

        <FormInput label={'email'} register={register} errors={errors} />

        <FormInputPassword
          label={'password'}
          register={register}
          errors={errors}
        />

        <StateSuspense show={!loading} fallback={<div>Loading</div>} />

        <Button type="submit">Submit</Button>
      </CardForm>
    </ContainerDiv>
  );
};

export default SignInContainer;
