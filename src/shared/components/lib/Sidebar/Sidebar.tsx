'use client';

import { HomeIcon, List, PlusSquare, Menu, UserCog, X } from 'lucide-react';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import {
  SidebarButtonText,
  SidebarMenu,
  StyledBurgerButton,
  StyledLogoText,
  StyledSidebar,
  StyledSidebarButton,
  StyledSidebarHeader,
  StyledSidebarInner,
} from './styles';

import { ROUTE } from '@/shared/constants/routes';

export function getSidebarNavItems(session: Session) {
  const userRole = session?.user.role;

  const sidebarNavItems = [
    {
      name: 'home',
      href: ROUTE.HOME,
      icon: <HomeIcon />,
    },
    {
      name: 'manga list',
      href: ROUTE.MANGA,
      icon: <List />,
    },
  ];

  if (userRole) {
    sidebarNavItems.push({
      name: 'add manga',
      href: ROUTE.ADD_MANGA,
      icon: <PlusSquare />,
    });

    if (userRole === 'Admin') {
      sidebarNavItems.push({
        name: 'admin',
        href: ROUTE.ADMIN,
        icon: <UserCog />,
      });
    }
  }

  return sidebarNavItems;
}

export default function Sidebar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const sidebarNavItems = getSidebarNavItems(session);

  const handleButtonClick = () => {
    setOpen((open) => !open);
  };

  return (
    <StyledSidebar $open={open}>
      <StyledSidebarInner>
        <StyledSidebarHeader>
          <StyledBurgerButton type="button" onClick={handleButtonClick}>
            {open ? <X /> : <Menu />}
          </StyledBurgerButton>
          {open && <StyledLogoText>MangaHub</StyledLogoText>}
        </StyledSidebarHeader>
        <SidebarMenu>
          {sidebarNavItems.map((item) => (
            <StyledSidebarButton href={item.href} key={item.name} type="button">
              {item.icon}
              {open && <SidebarButtonText>{item.name}</SidebarButtonText>}
            </StyledSidebarButton>
          ))}
        </SidebarMenu>
      </StyledSidebarInner>
    </StyledSidebar>
  );
}
