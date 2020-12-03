import { BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./consts/route";
import { Home } from "./pages/home";
import { Signin } from "./pages/signin";
import Signup from "./pages/signup";
import Debug from "./pages/debug"

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
      <Route exact path={ROUTES.DEBUG}>
        <Debug/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
