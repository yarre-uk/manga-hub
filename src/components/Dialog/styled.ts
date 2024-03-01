import styled from 'styled-components';

import { Card } from '../Card';

export const DialogStyled = styled(Card).attrs({ as: 'dialog' })`
  display: none;

  padding: 0;

  background-color: ${({ theme }) => theme.colours.background};

  &::backdrop {
    background-color: ${({ theme }) => theme.colours.backdrop};
  }

  &[open] {
    display: block;
  }
`;

export const CloseButtonStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;

  border-bottom-left-radius: ${({ theme }) => theme.border.radius};

  background-color: ${({ theme }) => theme.colours.danger};

  cursor: pointer;
`;
