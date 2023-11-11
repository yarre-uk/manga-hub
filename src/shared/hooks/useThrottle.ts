import { useRef, useCallback } from 'react';

function useThrottle<T extends unknown[], K extends unknown>(
  func: (...args: T) => K,
  wait: number,
): (...args: T) => void {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const throttledFunc = useCallback(
    (...args: T) => {
      if (!timeoutRef.current) {
        func(...args);
        timeoutRef.current = setTimeout(() => {
          timeoutRef.current = null;
        }, wait);
        return Promise.resolve();
      } else {
        return null;
      }
    },
    [func, wait],
  );

  return throttledFunc;
}

export default useThrottle;
