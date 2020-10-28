import React from "react";
import { useHistory } from "react-router-dom";
export default function UsersPage() {
  const history = useHistory();
  const logOut = (e) => {
    localStorage.clear("token");
    history.push("/");
  };
  return (
    <div>
      <h1>User Page</h1>
      <button onClick={logOut}>sign out</button>
    </div>
  );
}
