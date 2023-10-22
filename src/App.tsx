import { default as PageRoute } from '@constants/routes';
import GlobalStyles from '@styles/globals';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';

import { AppStyled, LinkSegment } from './AppStyles';
import { ChangePassword, ForgotPassword, Home, SignIn, SignUp } from './pages';

function App() {
  return (
    <HashRouter>
      <AppStyled>
        <GlobalStyles />

        <LinkSegment>
          <Link to={PageRoute.Home}>Home</Link>
          <Link to={PageRoute.SignIn}>SignIn</Link>
          <Link to={PageRoute.SignUp}>SignUp</Link>
          <Link to={PageRoute.ForgotPassword}>Forgot Password</Link>
          <Link to={PageRoute.ChangePassword}>Change Password</Link>
        </LinkSegment>

        <Routes>
          <Route index path={PageRoute.Home} element={<Home />} />
          <Route path={PageRoute.SignIn} element={<SignIn />} />
          <Route path={PageRoute.SignUp} element={<SignUp />} />
          <Route path={PageRoute.ForgotPassword} element={<ForgotPassword />} />
          <Route path={PageRoute.ChangePassword} element={<ChangePassword />} />
        </Routes>
      </AppStyled>
    </HashRouter>
  );
}

export default App;
