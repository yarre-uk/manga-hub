import styled from 'styled-components';

const BaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export const ContainerDiv = styled(BaseContainer)``;

export const ContainerSection = styled(BaseContainer).attrs({
  as: 'section',
})``;
