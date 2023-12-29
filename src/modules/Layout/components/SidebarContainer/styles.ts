import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 4rem;
  height: 100vh;

  background-color: #2c3e50;

  align-items: center;

  padding: 0.5rem 0;
  gap: 1rem;
`;

export const LinkStyled = styled(Link)`
  color: #eee;
`;
