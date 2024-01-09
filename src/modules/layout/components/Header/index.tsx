import { Home, Menu } from 'lucide-react';

import { HeaderStyled } from './styles';
import HeaderLink from '../Link';
import ProfileButton from '../ProfileButton';

import { ROUTE } from '@/constants';

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLink to={ROUTE.HOME} label="Home">
        <Home />
      </HeaderLink>
      <HeaderLink to={ROUTE.MANGA} label="Catalog">
        <Menu />
      </HeaderLink>
      <ProfileButton />
    </HeaderStyled>
  );
};

export default Header;
