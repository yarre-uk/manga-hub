import { User } from 'lucide-react';
import { useRef, useState } from 'react';

import { ProfileButtonStyled } from './styles';
import ProfileMenu from '../ProfileMenu';

import { useOutsideDetect } from '@/hooks';

const ProfileButton = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  useOutsideDetect(profileRef, open, () => setOpen(false));

  return (
    <ProfileButtonStyled
      ref={profileRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setOpen((prev) => !prev)}
    >
      <User />
      <p>Account</p>
      {open || hover ? <ProfileMenu onClose={() => setOpen(false)} /> : null}
    </ProfileButtonStyled>
  );
};

export default ProfileButton;
