import { useEffect } from 'react';

function useCursorLeave(onCursorLeave: () => void) {
  useEffect(() => {
    const handleCursorLeave = () => {
      onCursorLeave();
    };

    document.documentElement.addEventListener('mouseleave', handleCursorLeave);

    return () => {
      document.documentElement.removeEventListener(
        'mouseleave',
        handleCursorLeave,
      );
    };
  }, [onCursorLeave]);
}

export default useCursorLeave;
