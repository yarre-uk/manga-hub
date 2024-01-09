import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;

  align-items: center;

  cursor: pointer;
`;
