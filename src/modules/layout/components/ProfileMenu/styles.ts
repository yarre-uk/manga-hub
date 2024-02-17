import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  top: 3.5rem;

  padding: 0.5rem;
  gap: 0.5rem;

  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.foreground.light};

  background-color: ${({ theme }) => theme.colors.background};

  align-items: center;

  cursor: pointer;
`;

export const MenuLink = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.foreground.basic};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.foreground.light};
  }
`;

export const MenuButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.foreground.basic};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.foreground.light};
  }
`;

export const MenuText = styled.span`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.foreground.basic};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.foreground.light};
  }
`;
