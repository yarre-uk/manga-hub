import styled from 'styled-components';

export const ProfileMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  transform: translateY(70%);
  left: -50%;

  padding: 0.5rem;
  gap: 0.5rem;

  border-radius: ${({ theme }) => theme.round};
  border: 1px solid ${({ theme }) => theme.foreground.light};

  background-color: ${({ theme }) => theme.background};

  align-items: center;

  cursor: pointer;
`;

export const MenuElement = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.foreground.basic};
  border-radius: ${({ theme }) => theme.round};

  &:hover {
    background-color: ${({ theme }) => theme.foreground.light};
  }
`;
