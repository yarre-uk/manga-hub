import { Home, Menu, User } from 'lucide-react';

import { HeaderStyled, LinkStyled } from './styles';

import { ROUTE } from '@/constants';

const Header = () => {
  return (
    <HeaderStyled>
      <LinkStyled to={ROUTE.HOME}>
        <Home />
        <p>Home</p>
        <div className="test">
          <p>Hello</p>
        </div>
      </LinkStyled>
      <LinkStyled to={ROUTE.MANGA}>
        <Menu />
        <p>Manga</p>
      </LinkStyled>
      <LinkStyled to={ROUTE.PROFILE}>
        <User />
        <p>Profile</p>
      </LinkStyled>
    </HeaderStyled>
  );
};

export default Header;
