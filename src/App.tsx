import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { LayoutContainer } from './modules/layout';

import { ROUTE } from '@/constants';
import GlobalStyles from '@/globals';
import {
  ChangePasswordContainer,
  ForgotPasswordContainer,
  SignInContainer,
  SignUpContainer,
} from '@/modules/auth';
import { HomeContainer } from '@/modules/home';
import { NotFoundContainer } from '@/modules/notFound';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTE.HOME);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path={ROUTE.HOME} element={<LayoutContainer />}>
          <Route index element={<HomeContainer />} />
          <Route path={ROUTE.SIGN_IN} element={<SignInContainer />} />
          <Route path={ROUTE.SIGN_UP} element={<SignUpContainer />} />
          <Route
            path={ROUTE.FORGOT_PASSWORD}
            element={<ForgotPasswordContainer />}
          />
          <Route
            path={ROUTE.CHANGE_PASSWORD}
            element={<ChangePasswordContainer />}
          />
          <Route path="/*" element={<NotFoundContainer />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
