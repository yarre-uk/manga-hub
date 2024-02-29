import styled from 'styled-components';

import { ContainerSection } from '@/components';

export const ProfileContainerStyled = styled(ContainerSection)`
  padding: 2rem 6rem;

  display: flex;
  flex-direction: column;

  align-items: normal;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  height: 100%;
  width: 100%;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  gap: 1rem;
`;
