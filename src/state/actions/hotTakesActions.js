import { axiosWithAuth } from "../../utils/axiosWithAuth";
//USER STUFF
// export const GET_USERS_START = "GET_USERS_START";
// export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
// export const GET_USER_FAIL = "GET_USER_FAIL";

//POST STUFF
export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = " GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";
export const POST_POSTS_START = "POST_POSTS_START";
export const POST_POSTS_SUCCESS = "POST_POSTS_SUCCESS";
export const POST_POSTS_FAIL = "POST_POSTS_FAIL";
export const EDIT_POSTS_SUCCESS = "EDIT_POSTS_SUCCESS";
export const EDIT_POSTS_FAIL = "EDIT_POSTS_FAIL";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAIL = "DELETE_POST_FAIL";
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
export const GET_POSTS_BY_ID_START = "GET_POSTS_BY_ID_START";
export const GET_POSTS_BY_ID_SUCCESS = "GET_POSTS_BY_ID_SUCCESS";
export const GET_POSTS_BY_ID_FAIL = "GET_POSTS_BY_ID_FAIL";
export const UPVOTE_SUCCESS = "UPVOTE_SUCCESS";
export const UPVOTE_FAIL = "UPVOTE_FAIL";
export const DOWNVOTE_FAIL = "DOWNVOTE_FAIL";
export const DOWNVOTE_SUCCESS = "DOWNVOTE_SUCCESS";
// export const GET_COMMENTS_START = "GET_COMMENTS_START";
// export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
// export const GET_COMMENTS_FAIL = "GET_COMMENTS_FAIL";

//USERS ACTIONS
// export const getUsername = (id) => (dispatch) => {
//   dispatch({ type: GET_USERS_START });
//   axiosWithAuth()
//     .get(`/users/${id}`)
//     .then((res) => {
//       dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
//     })
//     .catch((err) => {
//       dispatch({ type: GET_USER_FAIL, payload: err.message });
//     });
// };
//POSTS ACTIONS
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
  dispatch({ type: POST_POSTS_START });
  axiosWithAuth()
    .post(`/posts`, newPost)
    .then((res) => {
      console.log("RES DATA", res.data);
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

export const deletePost = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`posts/${id}`)
    .then((res) => {
      console.log("delete", res.data);
      dispatch({ type: DELETE_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_POST_FAIL, payload: err.response });
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

export const getPostsByUser = (user_id) => (dispatch) => {
  dispatch({ type: GET_USER_POSTS_START });
  axiosWithAuth()
    .get(`users/${user_id}/posts`)
    //.get(`posts/${user_id}`)
    .then((res) => {
      dispatch({ type: GET_USER_POSTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_POSTS_FAIL, payload: err.message });
    });
};

export const getPostById = (post_id) => (dispatch) => {
  dispatch({ type: GET_POSTS_BY_ID_START });
  axiosWithAuth()
    .get(`posts/${post_id}`)
    .then((res) => {
      dispatch({ type: GET_POSTS_BY_ID_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_POSTS_BY_ID_FAIL, payload: err.message });
    });
};

export const upvotePost = (post_id) => (dispatch) => {
  axiosWithAuth()
    .put(`/posts/${post_id}/upvote`)
    .then((res) => {
      //console.log("RES FORM UPVOTE", res);
      dispatch({ type: UPVOTE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: UPVOTE_FAIL, payload: err.response });
    });
};

export const downvotePost = (post_id) => (dispatch) => {
  axiosWithAuth()
    .put(`/posts/${post_id}/downvote`)
    .then((res) => {
      //console.log("RES FORM UPVOTE", res);
      dispatch({ type: DOWNVOTE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DOWNVOTE_FAIL, payload: err.response });
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
