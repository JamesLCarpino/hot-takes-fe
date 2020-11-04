import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = " GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";
export const POST_POSTS_SUCCESS = "POST_POSTS_SUCCESS";
export const POST_POSTS_FAIL = "POST_POSTS_FAIL";
export const EDIT_POSTS_SUCCESS = "EDIT_POSTS_SUCCESS";
export const EDIT_POSTS_FAIL = "EDIT_POSTS_FAIL";
export const FLAG_POST = "FLAG_POST";
export const GET_TOP_POST_START = "GET_TOP_POST_START";
export const GET_TOP_POST_SUCCESS = "GET_TOP_POST_SUCCESS";
export const GET_TOP_POST_FAIL = "GET_TOP_POST_FAIL";
export const GET_NEWEST_POST_START = "GET_NEWEST_POST_START";
export const GET_NEWEST_POST_SUCCESS = "GET_NEWEST_POST_SUCCESS";
export const GET_NEWEST_POST_FAIL = "GET_NEWEST_POST_FAIL";
export const GET_USER_POSTS_START = "GET_USER_POSTS_START";
export const GET_USER_POSTS_SUCCESS = "GET_USER_POSTS_SUCCESS";
export const GET_USER_POSTS_FAIL = "GET_USER_POSTS_FAIL";

// export const GET_COMMENTS_START = "GET_COMMENTS_START";
// export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
// export const GET_COMMENTS_FAIL = "GET_COMMENTS_FAIL";

export const getAllPosts = () => (dispatch) => {
  dispatch({ type: GET_POSTS_START });
  axiosWithAuth()
    .get("/posts")
    .then((res) => {
      dispatch({ type: GET_POSTS_SUCCESS, payload: res.data });
      return res.data;
    })
    .catch((err) => {
      dispatch({ type: GET_POSTS_FAIL, payload: err.response });
    });
};

export const getTopPosts = () => (dispatch) => {
  dispatch({ type: GET_TOP_POST_START });
  axiosWithAuth()
    .get("/posts/top")
    .then((res) => {
      dispatch({ type: GET_TOP_POST_SUCCESS, payload: res.data });
      return res.data;
    })
    .catch((err) => {
      dispatch({ type: GET_TOP_POST_FAIL });
    });
};

export const getNewPosts = () => (dispatch) => {
  dispatch({ type: GET_NEWEST_POST_START });
  axiosWithAuth()
    .get("/posts/new")
    .then((res) => {
      dispatch({ type: GET_NEWEST_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_NEWEST_POST_FAIL });
    });
};

export const addPost = (newPost) => (dispatch) => {
  axiosWithAuth()
    .post(`/posts`, newPost)
    .then((res) => {
      dispatch({ type: POST_POSTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_POSTS_FAIL, payload: err.response });
    });
};

export const editPost = (postUpdate) => (dispatch) => {
  axiosWithAuth()
    .put(`/posts/${postUpdate.id}`, postUpdate)
    .then((res) => {
      dispatch({ type: EDIT_POSTS_SUCCESS, payload: res.action });
    })
    .catch((err) => {
      dispatch({ type: EDIT_POSTS_FAIL, payload: err.response });
    });
};

export const flagPost = (flagPost) => (dispatch) => {
  axiosWithAuth()
    .put(`/posts/${flagPost.id}`, flagPost)
    .then((res) => {
      console.log(flagPost);
      console.log(res);
      dispatch({ type: FLAG_POST, payload: res.action });
    });
};

export const getPostsByUser = (id) => (dispatch) => {
  dispatch({ type: GET_USER_POSTS_START });
  axiosWithAuth()
    .get(`users/${id}/posts`)
    .then((res) => {
      console.log("id", id);
      dispatch({ type: GET_USER_POSTS_SUCCESS, payload: res.action });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_POSTS_FAIL, payload: err.message });
    });
};

// export const getAllComments = () => (dispatch) => {
//   dispatch({ GET_COMMENTS_START });
//   axiosWithAuth()
//     .get("/comments")
//     .then((res) => {
//       dispatch({ type: GET_COMMENTS_SUCCESS, payload: res.data });
//       return res.data;
//     })
//     .catch((err) => {
//       dispatch({ type: GET_COMMENTS_FAIL, payload: err.message });
//     });
// };
