'use client';
import {
  KeyboardEvent,
  forwardRef,
  Ref,
  InputHTMLAttributes,
  useState,
} from 'react';

import { ValidationMessage, Spinner, UsernameWrapper } from './styles';
import { Input } from '../..';

import { checkIfServiceKey, debounce } from '@/shared/utils';

interface ValidationControlProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  placeholder: string;
  takenMessage: string;
  errorMessage?: string;
  onCheck: () => Promise<boolean> | boolean;
}

const ValidationControl = forwardRef(
  (
    {
      onCheck,
      type,
      id,
      placeholder,
      takenMessage,
      errorMessage,
      ...rest
    }: ValidationControlProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [taken, setTaken] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleKeyUp = debounce(async () => {
      try {
        const taken = await onCheck();

        setTaken(taken);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }, 500);

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      setLoading(checkIfServiceKey(event));
    };

    return (
      <>
        <UsernameWrapper>
          <Input
            ref={ref}
            type={type}
            id={id}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            {...rest}
          />
          <Spinner $shown={loading} />
        </UsernameWrapper>
        <ValidationMessage className={taken || errorMessage ? 'invalid' : ''}>
          {taken ? takenMessage : errorMessage}
        </ValidationMessage>
      </>
    );
  },
);

export default ValidationControl;
