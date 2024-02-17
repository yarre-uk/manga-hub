import { createContext, useState } from 'react';

export type DialogType = 'signIn' | 'signUp' | 'forgotPassword';

const LayoutContext = createContext<{
  isDialogOpen: boolean;
  dialogType: DialogType | null;
  openDialog: (open: boolean, type: DialogType) => void;
  closeDialog: () => void;
}>(null);

export const LayoutProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<DialogType | null>();

  const openDialog = (open: boolean, type: DialogType) => {
    setOpen(open);
    setType(type);
  };

  const closeDialog = () => {
    setOpen(false);
    setType(null);
  };

  return (
    <LayoutContext.Provider
      value={{ isDialogOpen: open, dialogType: type, openDialog, closeDialog }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
