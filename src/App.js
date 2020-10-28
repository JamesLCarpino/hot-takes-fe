import "./App.css";
import Landing from "./components/Landing";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/auth_components/Login";
import Register from "./components/auth_components/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
