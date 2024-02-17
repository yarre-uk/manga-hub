import { Outlet } from 'react-router-dom';

import { Content, LayoutContainerStyled } from './styles';
import { Header } from '../../components';
import DialogManager from '../../components/DialogManager';
import { LayoutProvider } from '../../contexts/LayoutProvider';

const Layout = () => {
  return (
    <LayoutContainerStyled>
      <LayoutProvider>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <DialogManager />
      </LayoutProvider>
    </LayoutContainerStyled>
  );
};

export default Layout;
