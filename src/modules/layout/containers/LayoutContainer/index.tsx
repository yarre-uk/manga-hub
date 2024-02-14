import { Outlet } from 'react-router-dom';

import { LayoutContainerStyled } from './styles';
import { Header } from '../../components';

const Layout = () => {
  return (
    <LayoutContainerStyled>
      <Header />
      <Outlet />
    </LayoutContainerStyled>
  );
};

export default Layout;
