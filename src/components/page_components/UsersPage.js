import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {
  getAllPosts,
  addPost,
  editPost,
  getTopPosts,
} from "../../state/actions";
export default function UsersPage() {
  const history = useHistory();
  const [display, setDisplay] = useState(false);
  const [visible, setVisible] = useState({
    comments: false,
    postsAll: false,
    postsTop: false,
    addNewPost: false,
  });
  const { postData, loading, error } = useSelector(
    (state) => state.hotTakesReducer
  );
  const dispatch = useDispatch();

  const showAllPosts = () => {
    setVisible({
      ...true,
      postsAll: true,
    });
  };

  const showComments = () => {
    setVisible({
      ...visible,
      comments: true,
    });
  };
  const showTopPosts = () => {
    setVisible({
      ...visible,
      postsTop: true,
    });
  };

  const addNewPost = () => {
    setVisible({
      ...visible,
      addNewPost: true,
    });
  };
  const closeModal = () => {
    setVisible(false);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push("/");
  };

  useEffect(() => {
    // dispatch(getTopPosts());
    // dispatch(getAllPosts())
  }, [dispatch]);
  return (
    <div>
      <div>
        <h1>Hello, {postData.username}</h1>
        <h2>What Hot Takes do you have today?</h2>
        <Modal></Modal>
        <button onClick={logOut}>sign out</button>
      </div>
      <div>
        <Button onClick={}>Click to see all posts</Button>
      </div>
    </div>
  );
}
