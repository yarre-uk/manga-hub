import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { ROUTE } from './constants';
import GlobalStyles from './globals';
import { LayoutContainer, useAuth } from './modules';
import { HomePage, NotFoundPage, ProfilePage } from './pages';

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { authorized } = useAuth();

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
          <Route index element={<HomePage />} />

          {authorized() ? (
            <Route path={ROUTE.PROFILE} element={<ProfilePage />} />
          ) : null}

          <Route path="*" element={<NotFoundPage />} />
          <Route path={ROUTE.PAGE_NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
