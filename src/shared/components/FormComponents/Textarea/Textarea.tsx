import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

import { Textarea as TextareaShadCn } from '@/shared/components/ui/textarea';
import transformStringFromCamelCase from '@/shared/utils/transformStringFromCamelCase';

interface TextareaProps<T> extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: Path<T>;
  register: UseFormRegister<T>;
  error: string | undefined;
  className?: string;
  divClassName?: string;
}

function Textarea<T>({
  label,
  register,
  className,
  divClassName,
  error,
  ...inputProps
}: TextareaProps<T>) {
  return (
    <div className={divClassName ? divClassName : 'flex flex-col gap-1'}>
      <label htmlFor={label}>{transformStringFromCamelCase(label)}</label>
      <TextareaShadCn
        className={className}
        {...register(label)}
        {...inputProps}
      />
      {error && <p className="ml-2 text-red-500">{error}</p>}
    </div>
  );
}

export default Textarea;
