import { Home, Menu } from 'lucide-react';

import { LinkStyled, SidebarStyled } from './styles';

import { ROUTE } from '@/constants';

const Routes = [
  {
    path: ROUTE.HOME,
    name: 'Home',
    icon: <Home />,
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
