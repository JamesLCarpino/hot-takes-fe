import "./App.css";
import Landing from "./components/Landing";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/auth_components/Login";
import UsersPage from "./components/page_components/UsersPage";
import AllTakesPage from "./components/page_components/AllTakesPage";
import PostPage from "./components/page_components/Posts/PostPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/my-home" component={UsersPage} />
        <PrivateRoute exact path="/hot-takes" component={AllTakesPage} />
        <Route exact path="/post/:postId" component={PostPage} />
      </Switch>
    </div>
  );
}

export default App;
