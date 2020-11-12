import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTopPosts } from "../../state/actions";

export default function AllTakesPage() {
  let dispatch = useDispatch();
  let history = useHistory();
  const { postData, loading } = useSelector(
    (state) => state.hotTakesReducer_POSTS
  );

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
        {loading === false ? (
          <h1>COOKIN' UP HOT TAKES!</h1>
        ) : (
          <>
            {postData.map((posts) => {
              return (
                <div>
                  <h1>{posts.title}</h1>
                  <p>{posts.content}</p>
                  <p>{posts.votes}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
