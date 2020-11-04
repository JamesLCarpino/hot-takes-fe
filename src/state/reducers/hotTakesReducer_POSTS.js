import {
  //posts
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  POST_POSTS_SUCCESS,
  POST_POSTS_FAIL,
  EDIT_POSTS_SUCCESS,
  EDIT_POSTS_FAIL,
  FLAG_POST,
  GET_TOP_POST_START,
  GET_TOP_POST_SUCCESS,
  GET_TOP_POST_FAIL,
  GET_NEWEST_POST_START,
  GET_NEWEST_POST_SUCCESS,
  GET_NEWEST_POST_FAIL,
  GET_USER_POSTS_START,
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_FAIL,
  //
  //comments
  // GET_COMMENTS_START,
  // GET_COMMENTS_SUCCESS,
  // GET_COMMENTS_FAIL,
} from "../actions";

const initialState = {
  postData: [],

  commentData: [],
  singlePostData: [],
  singleCommentData: [],
  loading: false,
  error: "",
};
export const hotTakesReducer_POSTS = (state = initialState, action) => {
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
    case GET_TOP_POST_START:
      return {
        ...state,
        loading: true,
      };
    case GET_TOP_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
      };
    case GET_TOP_POST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_NEWEST_POST_START:
      return {
        ...state,
        loading: true,
      };
    case GET_NEWEST_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
      };
    case GET_NEWEST_POST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_USER_POSTS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        postData: state.postData.map((id) =>
          id.id === action.payload.id ? action.payload : id
        ),
      };
    case GET_USER_POSTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case FLAG_POST:
      return {
        ...state,
        postData: state.postData.map((flag) =>
          flag.id === action.payload.id ? action.payload : flag
        ),
      };

    //comments
    // case GET_COMMENTS_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case GET_COMMENTS_SUCCESS:
    //   return {
    //     ...state,
    //     commentData: action.payload,
    //   };
    // case GET_COMMENTS_FAIL:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};
