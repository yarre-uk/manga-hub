import { MenuLink, MenuText, ProfileMenuStyled } from './styles';

import { ROUTE } from '@/constants';

const ProfileMenu = () => {
  const authorized = false;

  return (
    <ProfileMenuStyled>
      {authorized ? (
        <>
          <MenuLink to={ROUTE.PROFILE}>Profile</MenuLink>
          <MenuText
            onClick={() => {
              console.log('log out');
            }}
          >
            Log out
          </MenuText>
        </>
      ) : (
        <>
          <MenuLink to={ROUTE.SIGN_IN}>Sign in</MenuLink>
          <MenuLink to={ROUTE.SIGN_UP}>Sign up</MenuLink>
        </>
      )}
    </ProfileMenuStyled>
  );
};

export default ProfileMenu;
