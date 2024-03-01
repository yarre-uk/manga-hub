import styled from 'styled-components';

import { getBorder } from '@/utils';

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.semiLarge};
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.font.color.dark};

  background-color: #fff;

  padding: 0.35rem;

  ${getBorder()}

  font-size: ${({ theme }) => theme.font.size.semiLarge};

  &:focus {
    outline: none;
    ${({ theme }) => getBorder(theme.colours.primary)};
  }
`;

export const PasswordGroup = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;

  height: 2.5rem;

  background-color: #fff;
  color: ${({ theme }) => theme.font.color.dark};

  padding: 0.35rem;

  ${getBorder()}

  font-size: ${({ theme }) => theme.font.size.semiLarge};

  &:focus-within {
    ${({ theme }) => getBorder(theme.colours.primary)}
  }
`;

export const PasswordInput = styled.input`
  all: unset;
  flex: 1;
`;

export const PasswordButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  border-radius: ${({ theme }) => theme.border.radius};
  border-color: ${({ theme }) => theme.colours.foreground.light};

  .lucide {
    width: 1.5rem;
    height: 1.5rem;
  }

  cursor: pointer;
`;
