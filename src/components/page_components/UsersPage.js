import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Posts from "./Posts/Posts";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function UsersPage() {
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push("/");
  };

  useEffect(() => {});
  return (
    <div className="user-page-wrapper">
      <h1>User Page</h1>
      <button onClick={logOut}>sign out</button>

      <div>
        <Posts></Posts>
      </div>
    </div>
  );
}
