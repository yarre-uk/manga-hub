import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

import transformStringFromCamelCase from '../lib/transformStringFromCamelCase';

import { Input as InputShadCn } from '@/shared/components/ui/input';

interface InputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<T>;
  register: UseFormRegister<T>;
  error: string | undefined;
  className?: string;
  divClassName?: string;
}

function Input<T>({
  label,
  register,
  className,
  divClassName,
  error,
  ...inputProps
}: InputProps<T>) {
  return (
    <div className={divClassName ? divClassName : 'flex flex-col gap-1'}>
      <label htmlFor={label}>{transformStringFromCamelCase(label)}</label>
      <InputShadCn className={className} {...register(label)} {...inputProps} />
      {error && <p className="ml-2 text-red-500">{error}</p>}
    </div>
  );
}

export default Input;