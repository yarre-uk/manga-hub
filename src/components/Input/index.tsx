import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { UseFormRegister, FieldErrors, Path } from 'react-hook-form';

import {
  Input,
  InputStyled,
  Label,
  PasswordButton,
  PasswordGroup,
  PasswordInput,
} from './styled';
import ErrorMessage from '../ErrorMessage';

import theme from '@/constants/theme';
import { capitalizeText } from '@/utils';

type FormInputProps<T> = {
  label: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
} & React.HTMLProps<HTMLInputElement>;

export const FormInput = <T,>({
  label,
  register,
  errors,
  ...props
}: FormInputProps<T>) => {
  return (
    <InputStyled>
      <Label htmlFor={label}>{capitalizeText(label)}</Label>
      <Input {...register(label)} {...props} />
      <ErrorMessage message={errors[label]?.message} />
    </InputStyled>
  );
};

export const FormInputPassword = <T,>({
  label,
  register,
  errors,
  ...props
}: FormInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputStyled>
      <Label htmlFor={label}>{capitalizeText(label)}</Label>
      <PasswordGroup>
        <PasswordInput
          {...register(label)}
          {...props}
          type={showPassword ? 'text' : 'password'}
        />
        <PasswordButton onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? (
            <Eye color={theme.font.color.dark} />
          ) : (
            <EyeOff color={theme.font.color.dark} />
          )}
        </PasswordButton>
      </PasswordGroup>
      {<ErrorMessage message={errors[label]?.message} />}
    </InputStyled>
  );
};
