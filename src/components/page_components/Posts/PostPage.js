import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getTopPosts, getPostById } from "../../../state/actions";
import Comments from "../Comments/Comments";
export default function PostPage() {
  let dispatch = useDispatch();
  const match = useParams();
  const history = useHistory();
  const { postData, loading } = useSelector(
    (state) => state.hotTakesReducer_POSTS
  );
  const goBack = () => {
    history.push("/hot-takes");
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getPostById(match.postId));
  }, [dispatch, match.postId]);

  return (
    <div>
      <div>
        <h2>{postData.title}</h2>
      </div>
      <div>
        <Comments />
      </div>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
