import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import NewPostForm from "../Posts/NewPostForm";
import { useHistory } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import {
  getAllPosts,
  editPost,
  getTopPosts,
  getNewPosts,
  getPostsByUser,
  deletePost,
} from "../../../state/actions";

function Posts(props) {
  let history = useHistory();
  const [togglePosts, setTogglePosts] = useState({
    allPosts: false,
    newPosts: false,
    topPosts: false,
    myPosts: false,
    myComments: false,
  });
  const [postDisplay, setPostDisplay] = useState("");

  // const { postData, loading, error } = useSelector(
  //   (state) => state.hotTakesReducer_POSTS
  // );
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

  const [show, setShow] = useState(false);
  const deleteItOrNot = () => {
    setShow(true);
  };
  const cancelDelete = () => {
    setShow(false);
  };
  const onDelete = (post_id) => {
    console.log("FROM onDELETE", post_id);

    dispatch(deletePost(post_id));
  };

  const upvotePost = (post_id) => {
    console.log("FROM FLAGPOST", post_id);

    // dispatch(editPost(post_id));
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
        <NewPostForm />
      </div>
      <div>
        {props.loading === true ? (
          <div>
            {props.post.map((posts) => {
              return (
                <Card>
                  <Card.Title>{posts.title}</Card.Title>
                  <p>{posts.content}</p>
                  <p>{posts.votes}</p>
                  {togglePosts.newPosts === true ? (
                    <p>{posts.created}</p>
                  ) : null}

                  {togglePosts.myPosts === true ? (
                    <>
                      {!show ? (
                        <Button onClick={deleteItOrNot}>Delete</Button>
                      ) : (
                        <Alert show={show} variant="alert">
                          <Alert.Heading>
                            Are you sure you want to delete?
                          </Alert.Heading>
                          <Button onClick={cancelDelete}>
                            Nevermind, keep my hot take
                          </Button>
                          <Button
                            onClick={() => {
                              onDelete(posts.id);
                            }}
                          >
                            {" "}
                            Delete this cold take you loser.{" "}
                          </Button>
                        </Alert>
                      )}
                    </>
                  ) : null}

                  <button
                    onClick={() => {
                      upvotePost(posts.id);
                    }}
                  >
                    upvote
                  </button>
                  <button>downvote</button>
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
const mapStateToProps = (state) => {
  return {
    post: state.hotTakesReducer_POSTS.postData,
    loading: state.hotTakesReducer_POSTS.loading,
  };
};

export default connect(mapStateToProps, {
  getAllPosts,
  editPost,
  getTopPosts,
  getNewPosts,
  getPostsByUser,
  deletePost,
})(Posts);
