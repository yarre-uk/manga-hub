import styled from 'styled-components';

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

  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.border};
  height: 2.5rem;

  font-size: ${({ theme }) => theme.font.size.semiLarge};

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.primary};
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

  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.border};

  font-size: ${({ theme }) => theme.font.size.semiLarge};

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.primary};
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

  border-radius: ${({ theme }) => theme.borderRadius};
  border-color: ${({ theme }) => theme.colors.foreground.light};

  .lucide {
    width: 1.5rem;
    height: 1.5rem;
  }

  cursor: pointer;
`;
