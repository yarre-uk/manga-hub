import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTE } from './constants';
import {
  ChangePasswordContainer,
  ForgotPasswordContainer,
  SignInContainer,
  SignUpContainer,
} from './modules/auth';
import { HomeContainer } from './modules/home';
import { LayoutContainer } from './modules/layout';
import { NotFoundContainer } from './modules/notFound';

import GlobalStyles from '@/globals';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
};

export default App;
