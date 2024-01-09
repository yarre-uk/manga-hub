import { Home, Menu } from 'lucide-react';

import { HeaderStyled } from './styles';
import Link from '../Link';
import ProfileButton from '../ProfileButton';

import { ROUTE } from '@/constants';

const Header = () => {
  return (
    <HeaderStyled>
      <Link to={ROUTE.HOME} label="Home">
        <Home />
      </Link>
      <Link to={ROUTE.MANGA} label="Catalog">
        <Menu />
      </Link>
      <ProfileButton />
    </HeaderStyled>
  );
};

export default Header;
