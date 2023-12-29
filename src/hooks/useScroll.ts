import { useState, useEffect } from 'react';

import { debounce } from '@/utils';

const useScroll = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const debouncedHandleScroll = debounce(handleScroll, 30);

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  return scrollY;
};

export default useScroll;
