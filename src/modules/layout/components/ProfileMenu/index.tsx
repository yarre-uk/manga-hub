import { useContext } from 'react';

import { MenuButton, MenuLink, MenuText, ProfileMenuStyled } from './styles';
import LayoutContext, { DialogType } from '../../contexts/LayoutProvider';

import { ROUTE } from '@/constants';
import { useAuth } from '@/modules/auth';

const ProfileMenu = ({ onClose }: { onClose: () => void }) => {
  const { openDialog } = useContext(LayoutContext);
  const { logOut, authorized } = useAuth();

  const handleClick = (type: DialogType) => {
    openDialog(true, type);
  };

  return (
    <ProfileMenuStyled
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      {authorized() ? (
        <>
          <MenuLink to={ROUTE.USER}>Profile</MenuLink>
          <MenuText onClick={logOut}>Log out</MenuText>
        </>
      ) : (
        <>
          <MenuButton onClick={() => handleClick('signIn')}>Sign in</MenuButton>
          <MenuButton onClick={() => handleClick('signUp')}>Sign up</MenuButton>
        </>
      )}
    </ProfileMenuStyled>
  );
};

export default ProfileMenu;
