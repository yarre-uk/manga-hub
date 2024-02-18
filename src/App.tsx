import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { LayoutContainer } from './modules/layout';

import { ROUTE } from '@/constants';
import GlobalStyles from '@/globals';
import { HomeContainer } from '@/modules/home';
import { NotFoundContainer } from '@/modules/notFound';

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // This must work only once
  useEffect(() => {
    if (pathname === '/') {
      navigate(ROUTE.HOME);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path={ROUTE.HOME} element={<LayoutContainer />}>
          <Route index element={<HomeContainer />} />

          <Route path="/*" element={<NotFoundContainer />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
