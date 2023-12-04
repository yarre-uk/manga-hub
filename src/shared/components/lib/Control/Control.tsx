'use client';
import React, { forwardRef, InputHTMLAttributes, Ref } from 'react';

import { ValidationMessage } from './ControlStyles';

import { Input } from '@/shared/components/lib';

interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  placeholder: string;
  errorMessage?: string;
}

const Control = forwardRef(
  (
    { type, id, placeholder, errorMessage, ...rest }: ControlProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <>
        <Input
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          {...rest}
        />
        <ValidationMessage>{errorMessage}</ValidationMessage>
      </>
    );
  },
);

export default Control;
