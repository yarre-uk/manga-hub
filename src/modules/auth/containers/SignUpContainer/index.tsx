import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SignUpContainerStyled } from './styles';

import { CardForm } from '@/components';
import { PasswordRegex } from '@/constants';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().trim().matches(PasswordRegex).required(),
  })
  .required();

const SignUpContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <SignUpContainerStyled>
      <CardForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>

        <label htmlFor="email">Email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Password</label>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>

        <button type="submit">Submit</button>
      </CardForm>
    </SignUpContainerStyled>
  );
};

export default SignUpContainer;
