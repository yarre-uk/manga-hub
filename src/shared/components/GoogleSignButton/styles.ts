import styled from 'styled-components';

export const GoogleSignInButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  margin: 0 0 1rem;
  padding: 0 1rem;
  border: none;
  border-radius: 0.75rem;
  background-color: #fff;
  color: #737373;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const GoogleLogo = styled.img`
  width: 1.5rem;
  margin-right: 0.25rem;
`;

export const GoogleSignInButtonText = styled.span`
  all: unset;
  text-transform: none;
  font-weight: 500;
`;
