import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewPostForm from "../Posts/NewPostForm";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {
  getAllPosts,
  addPost,
  editPost,
  getTopPosts,
  getNewPosts,
  getPostsByUser,
} from "../../../state/actions";

export default function Posts() {
  const [togglePosts, setTogglePosts] = useState({
    allPosts: false,
    newPosts: false,
    topPosts: false,
    myPosts: false,
    myComments: false,
  });
  const [postDisplay, setPostDisplay] = useState("");

  const { postData, loading, error } = useSelector(
    (state) => state.hotTakesReducer_POSTS
  );
  const dispatch = useDispatch();

  const showAllPosts = () => {
    dispatch(getAllPosts());
    setPostDisplay("All");
    setTogglePosts({
      allPosts: true,
    });
  };
  const showTopPosts = () => {
    dispatch(getTopPosts());
    setPostDisplay("Top");
    setTogglePosts({
      topPosts: true,
    });
    console.log("top clicked", togglePosts);
  };

  const showNewestPosts = () => {
    dispatch(getNewPosts());
    setPostDisplay("New");
    setTogglePosts({
      newPosts: true,
    });
    console.log("newest clicked", togglePosts);
  };

  let user_id = JSON.parse(localStorage.getItem("id"));
  const showMyPosts = () => {
    console.log("userID", user_id);
    dispatch(getPostsByUser(user_id));
    setPostDisplay("My");
    setTogglePosts({
      myPosts: true,
    });
  };

  const showMyComments = () => {
    setTogglePosts({
      myComments: true,
    });
  };

  useEffect(() => {
    dispatch(getTopPosts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <DropdownButton
          id="dropdown-item-button"
          size="sm"
          title={`Displaying ${postDisplay} Posts`}
          variant="secondary"
        >
          <Dropdown.Item as="button" onClick={showAllPosts}>
            All Posts
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={showTopPosts}>
            Top Posts
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={showNewestPosts}>
            New Posts
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={showMyPosts}>
            My Posts
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <NewPostForm postData={postData} />
      </div>
      <div>
        {loading === true ? (
          <div>
            {postData.map((posts) => {
              return (
                <Card>
                  <Card.Title>{posts.title}</Card.Title>
                  <p>{posts.content}</p>
                  <p>{posts.votes}</p>
                  {togglePosts.newPosts === true ? (
                    <p>{posts.created}</p>
                  ) : null}
                </Card>
              );
            })}
          </div>
        ) : (
          <Spinner animation="border"></Spinner>
        )}
      </div>
    </div>
  );
}
