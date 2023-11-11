import { RefObject, useEffect } from 'react';

import { useEvent } from '.';

function useOutsideDetect(
  ref: RefObject<HTMLElement>,
  isOpen: boolean,
  onClickOutside: () => unknown,
) {
  const handleDocumentClick = useEvent((event: MouseEvent) => {
    if (
      event.target &&
      ref.current &&
      !ref.current.contains(event.target as Node)
    ) {
      onClickOutside();
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleDocumentClick);
      return () =>
        document.removeEventListener('mousedown', handleDocumentClick);
    }
  }, [isOpen, ref.current]);
}

export default useOutsideDetect;
