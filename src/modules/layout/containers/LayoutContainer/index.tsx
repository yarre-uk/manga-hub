import { Outlet } from 'react-router-dom';

import { LayoutContainerStyled } from './styles';
import { SideBar } from '../../components';

const Layout = () => {
  return (
    <LayoutContainerStyled>
      <SideBar />
      <Outlet />
    </LayoutContainerStyled>
  );
};

export default Layout;
