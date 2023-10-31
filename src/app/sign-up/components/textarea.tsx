import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

import { Textarea as TextareaShadCn } from '@/shared/components/ui/textarea';

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
      <label>{label[0].toLocaleUpperCase() + label.slice(1)}</label>
      <TextareaShadCn
        className={className}
        {...register(label)}
        {...inputProps}
      />
      {error && <p className="text-red-500 ml-2">{error}</p>}
    </div>
  );
}

export default Textarea;
