import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const GET_USERS_START = "GET_USERS_START";

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const getUsername = (id) => (dispatch) => {
  dispatch({ type: GET_USERS_START });
  axiosWithAuth()
    .get(`/users/${id}`)
    .then((res) => {
      //console.log("RES FOM ACTION", res.data[0].username);
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data[0].username });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_FAIL, payload: err.message });
    });
};
