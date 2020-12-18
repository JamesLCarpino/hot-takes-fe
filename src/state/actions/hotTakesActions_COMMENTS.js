import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const GET_COMMENTS_START = "GET_COMMENTS_START";
export const GET_COMMENTS_SUCCESS = " GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAIL = "GET_COMMENTS_FAIL";

export const getPostsComments = (post_id) => (dispatch) => {
  dispatch({ type: GET_COMMENTS_START });
  axiosWithAuth()
    .get(`/comments/post/${post_id}`)
    .then((res) => {
      console.log("FROM COMMENTS ACTION", res);
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: res.data });
      return res.data;
    })
    .catch((err) => {
      dispatch({ type: GET_COMMENTS_FAIL, payload: err.message });
    });
};
