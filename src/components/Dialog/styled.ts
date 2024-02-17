import styled from 'styled-components';

export const DialogStyled = styled.dialog`
  padding: 0;

  background-color: ${({ theme }) => theme.colors.background};

  &::backdrop {
    background-color: ${({ theme }) => theme.colors.backdrop};
  }
`;
