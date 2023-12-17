import React, { useEffect, useState } from 'react';

import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import Comment from '@/shared/models/comment';

interface DialogProps {
  isOpen: boolean;
  commentForEdit: Comment;
  onClose: () => void;
  onSubmit: (id: string, message: string) => void;
}

function MessageDialog({
  isOpen,
  commentForEdit,
  onClose,
  onSubmit,
}: DialogProps) {
  const [message, setMessage] = useState<string>('');

  const { toast } = useToast();

  useEffect(() => {
    setMessage(commentForEdit.body);
  }, [commentForEdit]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!message) {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Message cannot be empty.',
      });

      return;
    }

    setMessage('');
    onSubmit(commentForEdit.id, message);
  };

  const handleClose = () => {
    setMessage('');
    onClose();
  };

  return (
    <dialog
      open={isOpen}
      onClose={onClose}
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? 'visible' : 'hidden'
      }`}
      style={{
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-lg bg-background-secondary p-8"
      >
        <label className="text-sm font-bold text-white">
          Message:
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            className="focus:shadow-outline mb-2 mt-1 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
          />
        </label>
        <Button className="text-white" type="submit">
          Update
        </Button>
        <Button
          onClick={handleClose}
          className="ml-2"
          variant="destructive"
          type="reset"
        >
          Cancel
        </Button>
      </form>
    </dialog>
  );
}

export default MessageDialog;
