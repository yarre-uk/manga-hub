import { Outlet } from 'react-router-dom';

import { ProfilePageStyled } from './styled';

import { MenuContainer } from '@/modules/user';

const UserPage = () => {
  return (
    <ProfilePageStyled>
      <Outlet />
      <MenuContainer />
    </ProfilePageStyled>
  );
};

export default UserPage;
