import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

import { SignUpDTO } from './types';

import { Input as InputShadCn } from '@/shared/components/ui/input';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: Path<SignUpDTO>;
  register: UseFormRegister<SignUpDTO>;
  errors: FieldErrors<SignUpDTO>;
  className?: string;
  divClassName?: string;
}

function Input({
  label,
  register,
  errors,
  className,
  divClassName,
  ...inputProps
}: InputProps) {
  return (
    <div className={divClassName ? divClassName : 'flex flex-col gap-1'}>
      <label>{label[0].toLocaleUpperCase() + label.slice(1)}</label>
      <InputShadCn
        className={className}
        {...register(label, { required: 'This field is required' })}
        {...inputProps}
      />
      {errors[label] && (
        <p className="text-red-500 ml-2">{errors[label].message}</p>
      )}
    </div>
  );
}

export default Input;
