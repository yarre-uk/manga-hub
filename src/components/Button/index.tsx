import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonStyled, ButtonStyledProps } from './styled';

import theme from '@/constants/theme';
import { StringMap } from '@/types';

const variants = {
  primary: {
    $bgColor: theme.colours.primary,
    color: theme.font.color.light,
  },
  secondary: {
    $bgColor: theme.colours.secondary,
    color: theme.font.color.light,
  },
  tertiary: {
    $bgColor: theme.colours.tertiary,
    color: theme.font.color.dark,
  },
  danger: {
    $bgColor: theme.colours.danger,
    color: theme.font.color.dark,
  },
  warning: {
    $bgColor: theme.colours.warning,
    color: theme.font.color.dark,
  },
  success: {
    $bgColor: theme.colours.success,
    color: theme.font.color.dark,
  },
  info: {
    $bgColor: theme.colours.info,
    color: theme.font.color.dark,
  },
} as const satisfies StringMap<ButtonStyledProps>;

type ButtonProps = {
  variant?: keyof typeof variants;
  children: ReactNode;
  active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  return (
    <ButtonStyled disabled={disabled} {...variants[variant]}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
