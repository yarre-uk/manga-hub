import styled from 'styled-components';

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
