import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { object, string, ObjectSchema, ref } from 'yup';

import useAuth from '../../hooks/useAuth';

import {
  Button,
  CardForm,
  ContainerDiv,
  FormInput,
  FormInputPassword,
} from '@/components';
import { PasswordRegex } from '@/constants';
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

  const password = watch('password');

  useEffect(() => {
    if (touchedFields.password) {
      trigger('passwordConfirmation');
    }
  }, [password, trigger, touchedFields.password]);

  const onFormSubmit = (data: SignUpFormValues) => {
    signUp(data);
    onSubmit();
  };

  return (
    <ContainerDiv>
      <CardForm onSubmit={handleSubmit(onFormSubmit)}>
        <h2>Sign Up</h2>

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

        <Button type="submit">Submit</Button>
      </CardForm>
    </ContainerDiv>
  );
};

export default SignUpContainer;
