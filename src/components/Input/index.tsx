import { UseFormRegister, FieldErrors, Path } from 'react-hook-form';

import { Input, InputStyled, Label } from './styled';
import ErrorMessage from '../ErrorMessage';

import { capitalizeText } from '@/utils';

type FormInputProps<T> = {
  label: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

export const FormInput = <T,>({
  label,
  register,
  errors,
}: FormInputProps<T>) => {
  return (
    <InputStyled>
      <Label htmlFor={label}>{capitalizeText(label)}</Label>
      <Input {...register(label)} />
      <ErrorMessage message={errors[label]?.message} />
    </InputStyled>
  );
};

export const FormInputPassword = <T,>({
  label,
  register,
  errors,
}: FormInputProps<T>) => {
  return (
    <InputStyled>
      <Label htmlFor={label}>{capitalizeText(label)}</Label>
      <Input {...register(label)} type="password" />
      {<ErrorMessage message={errors[label]?.message} />}
    </InputStyled>
  );
};
