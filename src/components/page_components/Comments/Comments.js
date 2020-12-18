import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostsComments } from "../../../state/actions";
export default function Comments() {
  const dispatch = useDispatch();
  const match = useParams();
  const { commentData } = useSelector(
    (state) => state.hotTakesReducer_COMMENTS
  );

  //console.log(commentData);

  useEffect(() => {
    dispatch(getPostsComments(match.postId));
  }, [dispatch, match.postId]);

  return (
    <div>
      {commentData.map((comments) => {
        return (
          <>
            <div>
              <p>comment content:{comments.Comment}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
