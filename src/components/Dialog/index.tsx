import { X } from 'lucide-react';
import {
  DetailedHTMLProps,
  DialogHTMLAttributes,
  ReactElement,
  forwardRef,
} from 'react';

import { CloseButtonStyled, DialogStyled } from './styled';

export const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <CloseButtonStyled onClick={onClick}>
      <X size={30} />
    </CloseButtonStyled>
  );
};

type DialogProps = {
  children: ReactElement;
  onCancel?: () => void;
  onClose?: () => void;
} & DetailedHTMLProps<
  DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
>;

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, onCancel, onClose }: DialogProps, ref) => {
    //! ONLY IN DEVELOPMENT
    //TODO remove
    // useCursorLeave(onClose);

    return (
      <DialogStyled ref={ref} onCancel={onClose} onClose={onCancel}>
        {children}
        <CloseButton onClick={onCancel} />
      </DialogStyled>
    );
  },
);

export default Dialog;
