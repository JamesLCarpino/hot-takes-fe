import { GET_USERS_START, GET_USERS_SUCCESS, GET_USER_FAIL } from "../actions";

let initialState = {
  username: "",
  loading: false,
  error: "",
};

export const hotTakesReducer_USERS = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        username: action.payload,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
