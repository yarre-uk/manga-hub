import { X } from 'lucide-react';

import { CloseButtonStyled } from './styled';

export const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <CloseButtonStyled onClick={onClick}>
      <X size={30} />
    </CloseButtonStyled>
  );
};
