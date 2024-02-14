import { yupResolver } from '@hookform/resolvers/yup';
import { on } from 'events';
import { Resolver, useForm } from 'react-hook-form';
import { object, string, ObjectSchema, ref } from 'yup';

import { SignUpContainerStyled } from './styles';

import { CardForm } from '@/components';
import { PasswordRegex } from '@/constants';
import { SignUpFormValues } from '@/types';

const schema: ObjectSchema<SignUpFormValues> = object({
  email: string().email().required(),
  nickname: string().trim().required(),
  password: string().trim().matches(PasswordRegex).required(),
  confirm_password: string().oneOf(
    [ref('password'), null],
    'Passwords must match',
  ),
}).required();

const SignUpContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<SignUpFormValues>(schema),
  });

  const onSubmit = (data: SignUpFormValues) => console.log(data);

  return (
    <SignUpContainerStyled>
      <CardForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>

        <label htmlFor="email">Email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>

        <label htmlFor="nickname">Nickname</label>
        <input {...register('nickname')} />
        <p>{errors.nickname?.message}</p>

        <label htmlFor="password">Password</label>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>

        <label htmlFor="confirm_password">Confirm Password</label>
        <input {...register('confirm_password')} />
        <p>{errors.confirm_password?.message}</p>

        <button type="submit">Submit</button>
      </CardForm>
    </SignUpContainerStyled>
  );
};

export default SignUpContainer;
