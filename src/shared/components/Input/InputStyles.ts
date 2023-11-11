import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  border: 0;
  background: #15161a !important;
  color: inherit;
  border-radius: 0.75rem;
  font-family: inherit;
  text-align: left;
  font-size: 1.125rem;
  transition: 0.4s;
  backface-visibility: hidden;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: 99999s;
  }

  &::placeholder {
    color: rgb(255 255 255 / 30%);
  }
`;
