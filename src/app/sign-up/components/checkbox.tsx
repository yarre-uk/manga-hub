import { Path, UseFormRegister } from 'react-hook-form';

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
      <CheckboxShadCn
        id={label}
        className={className}
        {...register(label)}
        checked={true}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label[0].toLocaleUpperCase() + label.slice(1)}
        </label>
        {error && <p className="text-red-500 ml-2">{error}</p>}
      </div>
    </div>
  );
}

export default Checkbox;
