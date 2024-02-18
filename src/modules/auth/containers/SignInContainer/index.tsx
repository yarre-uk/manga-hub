import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string, ObjectSchema } from 'yup';

import {
  Button,
  CardForm,
  ContainerDiv,
  FormInput,
  FormInputPassword,
} from '@/components';
import { PasswordRegex } from '@/constants';
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

const SignInContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<SignInFormValues>(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log(data);
  };

  return (
    <ContainerDiv>
      <CardForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>

        <FormInput label={'email'} register={register} errors={errors} />

        <FormInputPassword
          label={'password'}
          register={register}
          errors={errors}
        />

        <Button type="submit">Submit</Button>
      </CardForm>
    </ContainerDiv>
  );
};

export default SignInContainer;
