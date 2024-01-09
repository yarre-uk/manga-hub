import styled from 'styled-components';

export const ProfileMenuStyled = styled.div`
  position: absolute;

  background-color: ${({ theme }) => theme.background};

  display: flex;
  flex-direction: row;

  align-items: center;

  gap: 0.5rem;

  cursor: pointer;
`;
