import "./App.css";
import Landing from "./components/Landing";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/auth_components/Login";
import UsersPage from "./components/page_components/UsersPage";
import AllTakesPage from "./components/page_components/AllTakesPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/my-home" component={UsersPage} />
        <PrivateRoute exact path="/hot-takes" component={AllTakesPage} />
      </Switch>
    </div>
  );
}

export default App;
