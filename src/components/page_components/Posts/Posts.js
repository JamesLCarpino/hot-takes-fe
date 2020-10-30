import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import {
  getAllPosts,
  addPost,
  editPost,
  getTopPosts,
} from "../../../state/actions";

export default function Posts() {
  const [togglePosts, setTogglePosts] = useState({
    allPosts: false,
    newPosts: false,
    topPosts: true,
    myPosts: false,
    myComments: false,
  });

  const { postData, loading, error } = useSelector(
    (state) => state.hotTakesReducer
  );
  const dispatch = useDispatch();

  const showAllPosts = () => {
    dispatch(getAllPosts());
    setTogglePosts({
      ...togglePosts,
      topPosts: false,
      allPosts: true,
    });
  };
  const showTopPosts = () => {
    dispatch(getTopPosts());
    setTogglePosts({
      ...togglePosts,
      topPosts: true,
    });
  };

  const showMyPosts = () => {
    setTogglePosts({
      ...togglePosts,
      myPosts: true,
    });
  };

  const showMyComments = () => {
    setTogglePosts({
      ...togglePosts,
      myComments: true,
    });
  };

  useEffect(() => {
    dispatch(getTopPosts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Button onClick={showAllPosts}>All Posts</Button>
        <Button onClick={showTopPosts}>Top Posts</Button>
        <Button onClick={showMyPosts}>My Posts</Button>
        <Button onClick={showMyComments}>My Comments</Button>
      </div>
      {loading ? (
        <div>
          {postData.map((posts) => {
            return (
              <Card>
                <Card.Title>{posts.title}</Card.Title>
                <p>{posts.content}</p>
                <p>{posts.votes}</p>
              </Card>
            );
          })}
        </div>
      ) : (
        <Spinner animation="border"></Spinner>
      )}
    </div>
  );
}
