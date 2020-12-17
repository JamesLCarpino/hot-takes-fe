import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Posts from "./Posts/Posts";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { getUsername } from "../../state/actions";

export default function UsersPage() {
  let history = useHistory();
  const { username, loading } = useSelector(
    (state) => state.hotTakesReducer_USERS
  );
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push("/");
  };

  let user_id = JSON.parse(localStorage.getItem("id"));
  useEffect(() => {
    dispatch(getUsername(user_id));
  }, [dispatch, user_id]);
  return (
    <div className="user-page-wrapper">
      <h1>{`What Hot Takes Do You Have Today ${username}?`}</h1>
      <button onClick={logOut}>sign out</button>

      <div>
        <Posts></Posts>
      </div>
    </div>
  );
}
