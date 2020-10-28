import React from "react";
import { useHistory } from "react-router-dom";
export default function UsersPage() {
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push("/");
  };
  return (
    <div>
      <h1>User Page</h1>
      <button onClick={logOut}>sign out</button>
    </div>
  );
}
