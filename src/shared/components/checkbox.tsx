import { Path, UseFormRegister } from 'react-hook-form';

import { Input } from './ui/input';
import transformStringFromCamelCase from '../utils/transformStringFromCamelCase';
import { cn } from '../utils/utils';

interface CheckboxProps<T> {
  label: Path<T>;
  register: UseFormRegister<T>;
  error: string | undefined;
  className?: string;
  divClassName?: string;
}

function Checkbox<T>({
  label,
  register,
  className,
  error,
  ...inputProps
}: CheckboxProps<T>) {
  return (
    <div className="flex flex-row items-center gap-4">
      <label htmlFor={label}>{transformStringFromCamelCase(label)}</label>
      <Input
        type="checkbox"
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          className,
        )}
        {...register(label)}
        {...inputProps}
      />
      {error && <p className="ml-2 text-red-500">{error}</p>}
    </div>
  );
}

export default Checkbox;
