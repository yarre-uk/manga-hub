'use client';

import {
  CloudDrizzle,
  HomeIcon,
  List,
  Menu,
  User2,
  UserCog,
  X,
} from 'lucide-react';
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
      name: 'catalog',
      href: ROUTE.CATALOG,
      icon: <List />,
    },
    {
      name: 'profile',
      href: ROUTE.PROFILE,
      icon: <User2 />,
    },
  ];

  if (userRole === 'User' || userRole === 'Admin') {
    sidebarNavItems.push({
      name: 'weather',
      href: ROUTE.WEATHER,
      icon: <CloudDrizzle />,
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
