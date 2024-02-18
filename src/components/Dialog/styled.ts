import styled from 'styled-components';

import { Card } from '../Card';

export const DialogStyled = styled(Card).attrs({ as: 'dialog' })`
  padding: 0;

  background-color: ${({ theme }) => theme.colors.background};

  &::backdrop {
    background-color: ${({ theme }) => theme.colors.backdrop};
  }
`;
