import styled from 'styled-components';

import { getBorder, modifyColor } from '@/utils';

export type ButtonStyledProps = {
  $bgColor: string;
  color: string;
  disabled?: boolean;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: ${({ $bgColor: bgColor, disabled }) =>
    disabled ? modifyColor(bgColor, 0.5) : bgColor};

  color: ${({ color }) => color};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $bgColor }) => getBorder(modifyColor($bgColor, 0.85))}

  &:hover {
    background-color: ${({ $bgColor: bgColor, disabled }) =>
      disabled ? modifyColor(bgColor, 0.5) : modifyColor(bgColor, 0.9)};

    border-color: ${({ $bgColor: bgColor }) => modifyColor(bgColor, 0.7)};

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;
