'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledBurgerButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;

  display: flex;
  gap: 16px;
  align-items: center;
  height: 56px;
  font-family: 'Poppins';
  font-size: 17px;
  text-transform: capitalize;
  line-height: 1;
  padding: 0 10px;
  border-radius: 8px;
  color: #f9f9f9;
  opacity: 0.8;
  transition: opacity 0.3s;
`;

export const StyledSidebar = styled.nav<{ $open: boolean }>`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: ${({ $open }) => ($open ? '270px' : '70px')};
  height: 100%;
  background: #202125;
  transition: width 0.4s;
`;

export const StyledLogoText = styled.span`
  font-weight: 600;
  font-size: large;
  margin-left: 1rem;
`;

export const StyledSidebarInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSidebarHeader = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 10px;
  padding-left: 12.5px;
  display: flex;
  align-items: center;
  background: rgb(0 0 0 / 15%);
`;

export const SidebarLogo = styled.img`
  height: 28px;
`;

export const SidebarButtonText = styled.span`
  margin-left: 1rem;
`;

export const SidebarMenu = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 10px;
`;

export const StyledSidebarButton = styled(Link)`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  height: 56px;
  font-family: 'Poppins';
  font-size: 17px;
  text-transform: capitalize;
  line-height: 1;
  padding: 10px;
  padding-left: 12.5px;
  border-radius: 8px;
  color: #f9f9f9;
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    background: rgb(0 0 0 / 30%);
    opacity: 1;
  }

  & > p {
    opacity: 0;
    transition: opacity 0.3s;

    &.open {
      opacity: 1;
    }
  }

  & > img {
    width: 24px;
    height: 24px;
  }

  & > span {
    opacity: 0.5;
  }
`;
