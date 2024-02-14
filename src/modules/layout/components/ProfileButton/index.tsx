import { User } from 'lucide-react';
import { useState } from 'react';

import { ProfileButtonStyled } from './styles';
import ProfileMenu from '../ProfileMenu';

const ProfileButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <ProfileButtonStyled
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <User />
      <p>Account</p>
      {hover ? <ProfileMenu /> : null}
    </ProfileButtonStyled>
  );
};

export default ProfileButton;
