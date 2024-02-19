import { ReactElement, useContext, useEffect, useMemo, useRef } from 'react';

import LayoutContext, { DialogType } from '../../contexts/LayoutProvider';

import { Dialog } from '@/components';
import { SignInContainer, SignUpContainer } from '@/modules/auth';

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

  const dialogContent = useMemo(() => {
    return {
      signIn: <SignInContainer onSubmit={closeDialog} />,
      signUp: <SignUpContainer onSubmit={closeDialog} />,
      forgotPassword: <p>forgot password</p>,
    } satisfies Record<DialogType, ReactElement>;
  }, []);

  return (
    <div>
      <Dialog ref={dialogRef} onClose={closeDialog} onCancel={closeDialog}>
        {dialogContent[dialogType]}
      </Dialog>
    </div>
  );
};

export default DialogManager;
