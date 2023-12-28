import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTE } from '@/shared/constants/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={ROUTE.HOME} element={<LayoutContainer />}> */}
        <Route index element={<div>Home</div>} />
        <Route path={ROUTE.SIGN_IN} element={<div>SignIn</div>} />
        <Route path={ROUTE.SIGN_UP} element={<div>SignUp</div>} />
        <Route path="/*" element={<div>Page404</div>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
