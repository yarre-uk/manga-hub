import styled from 'styled-components';

interface ButtonProps {
  bg: string;
  bgHover: string;
  bgActive: string;
  bRadius: string;
  color: string;
}

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  padding: 0.35rem 1.5rem;

  background: ${({ bg }) => bg};

  :hover {
    background: ${({ bgHover }) => bgHover};
  }

  :active {
    background: ${({ bgActive }) => bgActive};
  }

  border-radius: ${({ bRadius }) => bRadius};
  font-weight: 400;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  line-height: 1.5;
  font-size: 1rem;

  color: ${({ color }) => color} !important;
  cursor: pointer;
  transition: all 0.15s ease;
`;
