import { ReactNode } from 'react';
import { UseFormRegister, FieldErrors, Path } from 'react-hook-form';
import styled from 'styled-components';

import { InputStyled } from './styled';

import { capitalizedWords } from '@/utils';

type FormInputProps<T> = {
  label: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

export const Input = styled.input`
  color: ${({ theme }) => theme.font.color.dark};
`;
export const FormInput = <T,>({
  label,
  register,
  errors,
}: FormInputProps<T>) => {
  let error: ReactNode | null = null;

  if (errors[label]?.message !== undefined) {
    error = <p>{`${errors[label]?.message}`}</p>;
  }

  return (
    <InputStyled>
      <label htmlFor={label}>{capitalizedWords(label)}</label>
      <Input {...register(label)} />
      {error}
    </InputStyled>
  );
};

export const FormInputPassword = <T,>({
  label,
  register,
  errors,
}: FormInputProps<T>) => {
  let error: ReactNode | null = null;

  if (errors[label]?.message !== undefined) {
    error = <p>{`${errors[label]?.message}`}</p>;
  }

  return (
    <InputStyled>
      <label htmlFor={label}>{capitalizedWords(label)}</label>
      <Input {...register(label)} type="password" />
      {error}
    </InputStyled>
  );
};