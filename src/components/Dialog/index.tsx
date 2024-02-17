import {
  DetailedHTMLProps,
  DialogHTMLAttributes,
  ReactElement,
  forwardRef,
} from 'react';

import { DialogStyled } from './styled';

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
    return (
      <DialogStyled ref={ref} onCancel={onClose} onClose={onCancel}>
        {children}
      </DialogStyled>
    );
  },
);

export default Dialog;
