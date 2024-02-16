import styled from 'styled-components';

import { CardForm } from '@/components';

export const SignUpContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export const SignUpForm = styled(CardForm)`
  width: 100%;
  max-width: 400px;
  padding: 20px;

  gap: 1rem;
`;
