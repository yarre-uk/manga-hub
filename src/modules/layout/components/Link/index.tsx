import { ReactNode } from 'react';

import { LinkStyled } from './styles';

const Link = ({
  to,
  label,
  children,
}: {
  to: string;
  label: string;
  children: ReactNode;
}) => {
  return (
    <LinkStyled to={to}>
      {children}
      <p>{label}</p>
    </LinkStyled>
  );
};

export default Link;
