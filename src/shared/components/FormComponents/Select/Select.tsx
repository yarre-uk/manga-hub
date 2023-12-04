import { SelectProps as RadixSelectProps } from '@radix-ui/react-select';
import {
  Path,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

import { Select as SelectShadCn } from '@/shared/components/ui/select';
import capitalizedWords from '@/shared/utils/capitalizedWords';

interface SelectProps<T> extends RadixSelectProps {
  label: Path<T>;
  register: UseFormRegister<T>;
  error: string | undefined;
  divClassName?: string;
  setValue: UseFormSetValue<T>;
  getValues: UseFormGetValues<T>;
}

function Select<T>({
  label,
  register,
  divClassName,
  error,
  setValue,
  getValues,
  ...inputProps
}: SelectProps<T>) {
  const selectRegister = register(label);
  selectRegister.ref = null;

  return (
    <div className={divClassName ? divClassName : 'flex flex-col gap-1'}>
      <label htmlFor={label}>{capitalizedWords(label)}</label>
      <SelectShadCn
        value={getValues(label) as string}
        onValueChange={(e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setValue(label, e as any);
        }}
        {...selectRegister}
        {...inputProps}
      />
      {error && <p className="ml-2 text-red-500">{error}</p>}
    </div>
  );
}

export default Select;
