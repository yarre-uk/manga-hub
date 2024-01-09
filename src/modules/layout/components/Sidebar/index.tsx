import { Home, Menu, User } from 'lucide-react';

import { LinkStyled, SidebarStyled } from './styles';

import { ROUTE } from '@/constants';

const Routes = [
  {
    path: ROUTE.HOME,
    name: 'Home',
    icon: <Home />,
  },
  {
    path: ROUTE.SIGN_IN,
    name: 'Profile',
    icon: <User />,
  },
  {
    path: ROUTE.SIGN_UP,
    name: 'Sign Up',
    icon: <User />,
  },
];

const Sidebar = () => {
  return (
    <SidebarStyled>
      <div>
        <Menu />
      </div>
      {Routes.map((route) => (
        <LinkStyled key={route.path} to={route.path}>
          {route.name}
        </LinkStyled>
      ))}
    </SidebarStyled>
  );
};

export default Sidebar;
