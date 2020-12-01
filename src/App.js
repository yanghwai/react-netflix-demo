import * as ROUTES from "./consts/route";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/home";
import Signup from "./pages/signup";
import { Signin } from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
    </BrowserRouter>
  );
}

export default App;
