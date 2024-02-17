import { ReactElement, useContext, useEffect, useRef } from 'react';

import LayoutContext, { DialogType } from '../../contexts/LayoutProvider';

import { Dialog } from '@/components';

const DialogManager = () => {
  const { isDialogOpen, dialogType, closeDialog } = useContext(LayoutContext);
  const dialogRef = useRef<HTMLDialogElement>();

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }

    if (isDialogOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isDialogOpen, dialogRef]);

  const dialogContent = {
    signIn: <p>sign in</p>,
    signUp: <p>sign up</p>,
    forgotPassword: <p>forgot password</p>,
  } satisfies Record<DialogType, ReactElement>;

  return (
    <div>
      <Dialog ref={dialogRef} onClose={closeDialog} onCancel={closeDialog}>
        {dialogContent[dialogType]}
      </Dialog>
    </div>
  );
};

export default DialogManager;
