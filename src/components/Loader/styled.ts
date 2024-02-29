import styled from 'styled-components';

import { Card } from '../Card';

export const ContainerLoaderStyled = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem;

  background-color: ${({ theme }) => theme.colors.foreground.basic};
`;

export const FullPageLoaderStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
