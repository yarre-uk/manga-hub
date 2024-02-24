import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { object, string, ObjectSchema, ref } from 'yup';

import useAuth from '../../hooks/useAuth';

import {
  Button,
  CardForm,
  ContainerDiv,
  ErrorMessage,
  FormInput,
  FormInputPassword,
  StateSuspense,
} from '@/components';
import { PasswordRegex } from '@/constants';
import { useLoading } from '@/hooks';
import { SignUpFormValues } from '@/types';

const schema: ObjectSchema<SignUpFormValues> = object({
  email: string().email('Input is invalid email').required('Email is required'),
  nickname: string()
    .trim()
    .min(4, 'Nickname must be at least 4 characters long')
    .max(32, 'Nickname must be at most 32 characters long')
    .required('Nickname is required'),
  password: string()
    .trim()
    .min(8, 'Password must be at least 8 characters long')
    .max(32, 'Password must be at most 32 characters long')
    .matches(PasswordRegex, {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    })
    .required('Password is required'),
  passwordConfirmation: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const SignUpContainer = ({ onSubmit }: { onSubmit: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
    trigger,
  } = useForm({
    resolver: yupResolver<SignUpFormValues>(schema),
    mode: 'onChange',
  });

  const { signUp } = useAuth();

  const { loading, error, startLoading, stopLoading, errorOccurred } =
    useLoading();

  const password = watch('password');

  useEffect(() => {
    if (touchedFields.password) {
      trigger('passwordConfirmation');
    }
  }, [password, trigger, touchedFields.password]);

  const onFormSubmit = async (data: SignUpFormValues) => {
    try {
      startLoading();

      await toast.promise(signUp(data), {
        pending: 'Signing up...',
        success: 'Successfully signed up',
        error: 'Failed to sign up',
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
        <h2>Sign Up</h2>

        <ErrorMessage message={error?.message} />

        <FormInput label={'email'} register={register} errors={errors} />

        <FormInput label={'nickname'} register={register} errors={errors} />

        <FormInputPassword
          label={'password'}
          register={register}
          errors={errors}
        />

        <FormInputPassword
          label={'passwordConfirmation'}
          register={register}
          errors={errors}
        />

        <StateSuspense show={!loading} fallback={<div>Loading</div>} />

        <Button type="submit">Submit</Button>
      </CardForm>
    </ContainerDiv>
  );
};

export default SignUpContainer;
