import { Link, Route, Routes } from 'react-router-dom';
import { HashRouterStyled, HelloWorldStyled, LinkSegment } from './AppStyles';
import { Home, SignIn, SignUp } from './pages';

function App() {
  return (
    <HashRouterStyled>
      <HelloWorldStyled>Hello World</HelloWorldStyled>
      <LinkSegment>
        <Link to={'/'}>Home</Link>
        <Link to={'signin'}>SignIn</Link>
        <Link to={'signup'}>SignUp</Link>
      </LinkSegment>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </HashRouterStyled>
  );
}

export default App;
