import styled from 'styled-components';

export const Input = styled.input`
  color: ${({ theme }) => theme.font.color.dark};

  padding: 0.35rem;

  border-radius: ${({ theme }) => theme.borderRadius};

  font-size: ${({ theme }) => theme.font.size.semiLarge};
`;

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.semiLarge};
`;
