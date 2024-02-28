import { ProfilePageStyled } from './styled';

import { ManagerContainer, MenuContainer } from '@/modules/profile';

const ProfilePage = () => {
  return (
    <ProfilePageStyled>
      <ManagerContainer />
      <MenuContainer />
    </ProfilePageStyled>
  );
};

export default ProfilePage;
