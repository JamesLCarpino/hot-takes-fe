import {
  //posts
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_BY_ID_START,
  GET_POSTS_BY_ID_SUCCESS,
  GET_POSTS_BY_ID_FAIL,
  POST_POSTS_START,
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
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  UPVOTE_SUCCESS,
  UPVOTE_FAIL,
  DOWNVOTE_SUCCESS,
  DOWNVOTE_FAIL,
  //
  //comments
  // GET_COMMENTS_START,
  // GET_COMMENTS_SUCCESS,
  // GET_COMMENTS_FAIL,
} from "../actions";

const initialState = {
  postData: [],
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
    case POST_POSTS_START:
      return {
        ...state,
        loading: true,
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
        postData: action.payload,
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
        loading: false,
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
        postData: action.payload,
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
    case DELETE_POST_SUCCESS:
      // const postID = action.payload;
      // console.log("POSTID", postID);
      return {
        ...state,
        postData: state.postData.filter(
          (post) =>
            //console.log(post.id, action.payload.id)
            post.id !== action.payload.id
        ),
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    // case UPVOTE_START:
    //   return{
    //     ...state,
    //     loading:true,
    //   };
    case UPVOTE_SUCCESS:
      return {
        ...state,
        votes: action.payload,
      };
    case UPVOTE_FAIL:
      return { ...state, error: action.payload };
    case DOWNVOTE_SUCCESS:
      return {
        ...state,
        votes: action.payload,
      };
    case DOWNVOTE_FAIL:
      return { ...state, error: action.payload };

    case GET_POSTS_BY_ID_START:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_BY_ID_SUCCESS:
      return {
        ...state,
        postData: action.payload,
        loading: false,
      };
    case GET_POSTS_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
