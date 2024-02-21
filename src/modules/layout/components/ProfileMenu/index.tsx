import { useContext } from 'react';

import { MenuButton, MenuLink, MenuText, ProfileMenuStyled } from './styles';
import LayoutContext from '../../contexts/LayoutProvider';

import { ROUTE } from '@/constants';
import { useAuth } from '@/modules/auth';

const ProfileMenu = () => {
  const { openDialog } = useContext(LayoutContext);
  const { logOut, authorized } = useAuth();

  const handleSignIn = () => {
    openDialog(true, 'signIn');
  };

  const handleSignUp = () => {
    openDialog(true, 'signUp');
  };

  return (
    <ProfileMenuStyled>
      {authorized() ? (
        <>
          <MenuLink to={ROUTE.PROFILE}>Profile</MenuLink>
          <MenuText onClick={logOut}>Log out</MenuText>
        </>
      ) : (
        <>
          <MenuButton onClick={handleSignIn}>Sign in</MenuButton>
          <MenuButton onClick={handleSignUp}>Sign up</MenuButton>
        </>
      )}
    </ProfileMenuStyled>
  );
};

export default ProfileMenu;
