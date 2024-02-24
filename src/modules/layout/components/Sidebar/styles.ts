import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 4rem;
  height: 100vh;

  background-color: #1c1c1e;

  align-items: center;

  padding: 0.5rem 0;
  gap: 1rem;
`;

export const LinkStyled = styled(Link)`
  color: #eee;
`;
