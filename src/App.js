import AuthForm from "./component/Login/AuthForm";
import WelcomePage from "./component/Pages/Welcomepages";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="*">
          <Redirect to="authpage" />
        </Route>
        <Route path="/authpage">
          <AuthForm />
        </Route>
        <Route path="/welcomepage">
          <WelcomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
