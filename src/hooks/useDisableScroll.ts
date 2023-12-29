import { useEffect, useState } from 'react';

import useScroll from './useScroll';

const useDisableScroll = (disabled: boolean) => {
  const scrollPosition = useScroll();
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  useEffect(() => {
    const disableScroll = () => {
      const body = document.body;
      setPreviousScrollPosition(scrollPosition);

      body.style.position = 'fixed';
      body.style.overflowY = 'scroll';
      body.style.width = '100%';
      body.style.top = `-${scrollPosition}px`;
    };

    const enableScroll = () => {
      const body = document.body;

      body.style.position = '';
      body.style.overflowY = '';
      body.style.width = '';
      body.style.top = '';

      window.scrollTo(0, previousScrollPosition);
    };

    if (disabled) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [disabled]);
};

export default useDisableScroll;
