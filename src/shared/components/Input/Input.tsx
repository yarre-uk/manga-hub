import { ChangeEvent, forwardRef, InputHTMLAttributes, Ref } from 'react';

import { Input as StyledInput } from './InputStyles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(
  ({ onChange, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <StyledInput ref={ref} onChange={onChange} {...rest} />;
  },
);
Input.displayName = 'Input';

export default Input;
