import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  POST_POSTS_SUCCESS,
  POST_POSTS_FAIL,
  EDIT_POSTS_SUCCESS,
  EDIT_POSTS_FAIL,
  GET_COMMENTS_START,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
} from "../actions";

const initialState = {
  postData: [],
  commentData: [],
  singlePostData: [],
  singleCommentData: [],
  loading: false,
  error: "",
};
export const hotTakesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        postData: action.payload,
      };
    case GET_POSTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case POST_POSTS_SUCCESS:
      return {
        ...state,
        postData: [...state.postData, action.payload],
      };
    case POST_POSTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_POSTS_SUCCESS:
      return {
        ...state,
        postData: state.postData.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case EDIT_POSTS_FAIL:
      return {
        ...state,
        error: false,
      };

    default:
      return state;
  }
};
