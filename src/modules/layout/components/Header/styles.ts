import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 4rem;

  background-color: #1c1c1e;

  align-items: center;

  padding: 0.5rem 0;
  gap: 1rem;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;

  align-items: center;

  cursor: pointer;

  :hover {
    color: #fff;

    .test {
      opacity: 0.5 !important;
    }
  }

  ::after {
    content: '';
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #1db954;
  }

  .test {
    opacity: 0;
    transition: opacity 0.3s ease;
    width: 50px;
    height: 50px;
    background-color: red;
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 10;
  }
`;
