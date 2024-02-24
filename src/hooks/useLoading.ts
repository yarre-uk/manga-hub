import { useState } from 'react';

import useEvent from './useEvent';

const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const startLoading = useEvent(() => {
    setLoading(true);
    setError(null);
  });

  const stopLoading = useEvent(() => {
    setLoading(false);
    setError(null);
  });

  const errorOccurred = useEvent((error: Error) => {
    setLoading(false);
    setError(error);
  });

  return { loading, error, startLoading, stopLoading, errorOccurred };
};

export default useLoading;
