import { useLayoutEffect, useMemo, useRef } from 'react';

type Fn<ARGS extends unknown[], T> = (...args: ARGS) => T;

function useEvent<T extends unknown[], K>(fn: Fn<T, K>): Fn<T, K> {
  const ref = useRef<Fn<T, K>>(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  });

  return useMemo(
    () =>
      (...args: T): K => {
        return ref.current(...args);
      },
    [],
  );
}

export default useEvent;
