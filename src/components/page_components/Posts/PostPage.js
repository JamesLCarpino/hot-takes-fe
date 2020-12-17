import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTopPosts, getPostById } from "../../../state/actions";
import Comments from "../Comments/Comments";
export default function PostPage() {
  let dispatch = useDispatch();
  const match = useParams();
  const { postData, loading } = useSelector(
    (state) => state.hotTakesReducer_POSTS
  );
  const test = () => {
    console.log(match.postId);
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
    </div>
  );
}
