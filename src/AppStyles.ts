import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';

export const HashRouterStyled = styled(HashRouter)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LinkSegment = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HelloWorldStyled = styled.p`
  font-size: 2rem;
`;
