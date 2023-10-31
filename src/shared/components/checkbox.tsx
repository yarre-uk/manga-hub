import { Path, UseFormRegister } from 'react-hook-form';

import transformStringFromCamelCase from '../lib/transformStringFromCamelCase';

import { Checkbox as CheckboxShadCn } from '@/shared/components/ui/checkbox';

interface CheckboxProps<T> {
  label: Path<T>;
  register: UseFormRegister<T>;
  error: string | undefined;
  className?: string;
  divClassName?: string;
}

function Checkbox<T>({ label, register, className, error }: CheckboxProps<T>) {
  return (
    <div className="items-top flex space-x-2">
      <CheckboxShadCn id={label} className={className} {...register(label)} />
      <div className="grid gap-1.5 leading-none">
        <label htmlFor={label}>{transformStringFromCamelCase(label)}</label>
        {error && <p className="text-red-500 ml-2">{error}</p>}
      </div>
    </div>
  );
}

export default Checkbox;
