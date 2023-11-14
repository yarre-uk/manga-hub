import styled, { keyframes } from 'styled-components';

export const UsernameWrapper = styled.div`
  position: relative;
  margin: 0 0 1rem;
`;

const spinAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Spinner = styled.div<{ $shown: boolean }>`
  position: absolute;
  top: 50%;
  right: 20px;
  ${({ $shown }) => `
  display: ${$shown ? 'block' : 'none'}
  `};
  width: 30px;
  height: 30px;
  translate: 0 -50%;
  border: 3px solid rgb(255 255 255 / 10%);
  border-top-color: #68e1fd;
  border-radius: 50%;
  animation: ${spinAnimation} 0.6s infinite linear;
  transition: all 0.3s;
`;

export const ValidationMessage = styled.div`
  height: ${({ children }) => (children ? '30px' : '0')};
  padding-left: 0.25rem;
  display: flex;
  align-items: center;
  color: #b13950;
  transition: all 0.3s;
  overflow: hidden;
  margin: ${({ children }) => (children ? '-0.5rem 0 0.5rem' : '0')};
`;
