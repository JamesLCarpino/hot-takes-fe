import {
  //comments
  GET_COMMENTS_START,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
} from "../actions";

const initialState = {
  commentData: [],
  loading: false,
  error: "",
};

export const hotTakesReducer_COMMENTS = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        commentData: action.payload,
      };
    case GET_COMMENTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
