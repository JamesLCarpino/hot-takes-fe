import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import NewPostForm from "../Posts/NewPostForm";
import { useHistory } from "react-router-dom";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import {
  getAllPosts,
  editPost,
  getTopPosts,
  getNewPosts,
  getPostsByUser,
  deletePost,
  upvotePost,
  downvotePost,
} from "../../../state/actions";

function Posts(props) {
  let history = useHistory();

  const [visible, setVisible] = useState(false);
  const [togglePosts, setTogglePosts] = useState({
    allPosts: false,
    newPosts: false,
    topPosts: false,
    myPosts: false,
    myComments: false,
  });
  const [postDisplay, setPostDisplay] = useState("");

  const dispatch = useDispatch();

  //toggles and dispatches what is being displayed
  const showAllPosts = () => {
    dispatch(getAllPosts());
    setPostDisplay("Showing All Posts");
    setTogglePosts({
      allPosts: true,
    });
  };
  const showTopPosts = () => {
    dispatch(getTopPosts());
    setPostDisplay("Showing Top Posts");
    setTogglePosts({
      topPosts: true,
    });
    console.log("top clicked", togglePosts);
  };

  const showNewestPosts = () => {
    dispatch(getNewPosts());
    setPostDisplay("Showing New Posts");
    setTogglePosts({
      newPosts: true,
    });
    console.log("newest clicked", togglePosts);
  };

  let user_id = JSON.parse(localStorage.getItem("id"));
  const showMyPosts = () => {
    console.log("userID", user_id);
    dispatch(getPostsByUser(user_id));
    setPostDisplay("Showing My Posts");
    setTogglePosts({
      myPosts: true,
    });
  };

  //delete controls
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

  //new post controls for modal
  const makeNewPostModal = () => {
    setVisible(true);
  };
  const hidePostModal = () => {
    setVisible(false);
  };

  //upvotes and downvotes submitters
  const upvotePostSubmit = (post_id) => {
    console.log("from upvote post", post_id);
    dispatch(upvotePost(post_id));
  };
  const downvotePostSubmit = (post_id) => {
    dispatch(downvotePost(post_id));
  };
  const goBack = () => {
    history.push("/hot-takes");
  };
  useEffect(() => {
    const getvoteCount = () => {
      let posts = dispatch(getAllPosts());
      console.log(posts);
    };
    getvoteCount();
  }, []);

  return (
    <div>
      <div>
        <DropdownButton
          id="dropdown-item-button"
          size="sm"
          title={`${postDisplay}` || `Posts`}
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
      <button onClick={goBack}>Back</button>
      <Button onClick={makeNewPostModal}>Got A Hot Take? Click me.</Button>
      <Modal
        title="Basic Modal"
        onHide={hidePostModal}
        show={visible}
        aria-labelledby="contained-modal"
        centered
      >
        <NewPostForm hidePostModal={hidePostModal} />
      </Modal>
      <div>
        {togglePosts.myPosts === true ? (
          <>
            {!show ? (
              <Button onClick={deleteItOrNot}>Delete Your Takes?</Button>
            ) : (
              <Button onClick={cancelDelete}>
                Nevermind, keep my hot takes!
              </Button>
            )}
          </>
        ) : null}
        {props.loading === true ? (
          <div>
            {props.post.map((posts) => {
              return (
                <CardDeck>
                  <Card
                    style={{
                      textAlign: "center",

                      marginLeft: "17%",
                      marginRight: "17%",
                      marginTop: "2%",
                      padding: "2%",
                    }}
                  >
                    <Card.Title>{posts.title}</Card.Title>
                    <Card.Subtitle>Posted By: {posts.username}</Card.Subtitle>
                    <p>{posts.content}</p>
                    <p>VOTES:{posts.votes.length}</p>
                    {togglePosts.newPosts === true ? (
                      <p>{posts.created}</p>
                    ) : null}

                    {togglePosts.myPosts === true ? (
                      <>
                        {!show ? null : (
                          <Alert show={show} variant="danger">
                            <Alert.Heading>
                              Are you sure you want to delete?
                            </Alert.Heading>

                            <Button
                              onClick={() => {
                                onDelete(posts.id);
                                setShow(false);
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
                        upvotePostSubmit(posts.id);
                      }}
                    >
                      upvote
                    </button>
                    <button
                      onClick={() => {
                        downvotePostSubmit(posts.id);
                      }}
                    >
                      downvote
                    </button>
                  </Card>
                </CardDeck>
              );
            })}
          </div>
        ) : (
          <h3>Whats up, got a hot take? Lookin' for the posts?</h3>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    post: state.hotTakesReducer_POSTS.postData,
    loading: state.hotTakesReducer_POSTS.loading,
    error: state.hotTakesReducer_POSTS.error,
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
