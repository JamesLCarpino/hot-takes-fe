import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTopPosts, getPostById } from "../../state/actions";
import { Route, Link } from "react-router-dom";
import PostPage from "./Posts/PostPage";

export default function AllTakesPage() {
  let dispatch = useDispatch();
  let history = useHistory();
  const { postData, loading } = useSelector(
    (state) => state.hotTakesReducer_POSTS
  );

  const goToPost = (post_id) => {
    console.log("test", post_id);
  };

  useEffect(() => {
    dispatch(getTopPosts());
  }, [dispatch]);

  const goHome = () => {
    history.push("/my-home");
  };

  return (
    <div>
      <h1>Howdy! Here are all the current hottest takes!</h1>
      <div>
        <button onClick={goHome}>Profile</button>
      </div>

      <div>
        {loading === true ? (
          <h1>COOKIN' UP HOT TAKES!</h1>
        ) : (
          <>
            {postData.map((posts) => {
              return (
                <Link to={`/post/${posts.id}`}>
                  <div>
                    <h1
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        goToPost(posts.id);
                      }}
                    >
                      {posts.title}
                    </h1>
                    <p>{posts.content}</p>
                    <p>{posts.votes}</p>
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
