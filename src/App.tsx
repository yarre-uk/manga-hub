import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';

import { ROUTE } from './constants';
import GlobalStyles from './globals';
import { LayoutContainer, useAuth } from './modules';
import { HomePage, NotFoundPage, ProfilePage } from './pages';

import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
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
