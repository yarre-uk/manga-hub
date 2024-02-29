import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, Bounce, toast } from 'react-toastify';

import { StateSuspense } from './components';
import { FullPageLoader } from './components';
import { ROUTE } from './constants';
import GlobalStyles from './globals';
import { useAuth } from './modules/auth';
import { LayoutContainer } from './modules/layout';
import { HomePage, NotFoundPage, ProfilePage } from './pages';
import { axios } from './utils';

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { authorized, isReady } = useAuth();

  // This must work only once
  useEffect(() => {
    if (pathname === '/') {
      navigate(ROUTE.HOME);
    }
  }, []);

  useEffect(() => {
    toast.promise(axios.get('/app/test'), {
      error: 'Server is not available',
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
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
      <StateSuspense show={isReady} fallback={<FullPageLoader />}>
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
      </StateSuspense>
    </>
  );
};

export default App;
