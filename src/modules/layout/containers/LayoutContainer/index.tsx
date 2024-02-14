import { Outlet } from 'react-router-dom';

import { Content, LayoutContainerStyled } from './styles';
import { Header } from '../../components';

const Layout = () => {
  return (
    <LayoutContainerStyled>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </LayoutContainerStyled>
  );
};

export default Layout;
