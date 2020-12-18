import { combineReducers } from "redux";
import { hotTakesReducer_POSTS } from "./reducers/hotTakesReducer_POSTS";
import { hotTakesReducer_USERS } from "./reducers/hotTakesReducer_USERS";
import { hotTakesReducer_COMMENTS } from "./reducers/hotTakesReducer_COMMENTS";
export default combineReducers({
  hotTakesReducer_POSTS,
  hotTakesReducer_USERS,
  hotTakesReducer_COMMENTS,
});
