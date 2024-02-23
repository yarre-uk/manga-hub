import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTE } from '@/constants';

const Page = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== ROUTE.PAGE_NOT_FOUND) {
      navigate(ROUTE.PAGE_NOT_FOUND);
    }
  }, [location, navigate]);

  return (
    <div>
      <p>404</p>
    </div>
  );
};

export default Page;
