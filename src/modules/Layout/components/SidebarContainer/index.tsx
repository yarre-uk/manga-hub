import { LinkStyled, SideBarStyled } from './styles';

import { ROUTE } from '@/constants';

const Routes = [
  {
    path: ROUTE.HOME,
    name: 'Home',
  },
  {
    path: ROUTE.SIGN_IN,
    name: 'Sign In',
  },
  {
    path: ROUTE.SIGN_UP,
    name: 'Sign Up',
  },
];

const Sidebar = () => {
  return (
    <SideBarStyled>
      {Routes.map((route) => (
        <LinkStyled key={route.path} to={route.path}>
          {route.name}
        </LinkStyled>
      ))}
    </SideBarStyled>
  );
};

export default Sidebar;
