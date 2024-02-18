import {
  DetailedHTMLProps,
  DialogHTMLAttributes,
  ReactElement,
  forwardRef,
} from 'react';

import { DialogStyled } from './styled';

import { useCursorLeave } from '@/hooks';

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
    useCursorLeave(onClose);

    return (
      <DialogStyled ref={ref} onCancel={onClose} onClose={onCancel}>
        {children}
      </DialogStyled>
    );
  },
);

export default Dialog;
