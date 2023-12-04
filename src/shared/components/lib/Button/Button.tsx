'use client';
import { ButtonHTMLAttributes } from 'react';

import { Button as StyledButton } from './ButtonStyles';

import { calculateBackgroundColor } from '@/shared/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: 'none' | 'light' | 'strong';
  color?: string;
  fontColor?: string;
}

function Button({
  color = '#2b2c30',
  fontColor = '#FBFEF9',
  rounded = 'light',
  children,
  ...rest
}: ButtonProps) {
  const [bgColor, bgHover, bgActive] = calculateBackgroundColor(
    color,
    -10,
    -15,
  );

  const radiusValues = {
    none: '0',
    light: '5px',
    strong: '50%',
  };

  return (
    <StyledButton
      bg={bgColor}
      bgHover={bgHover}
      bgActive={bgActive}
      bRadius={radiusValues[rounded]}
      color={fontColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
