// Login/action.js
import axios from "axios";
import {
  SET_EMAIL,
  SET_PASSWORD,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESET_LOGIN_FORM,
} from "./actionTypes";

export const setEmail = (email) => ({ type: SET_EMAIL, payload: email });
export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
export const resetLoginForm = () => ({ type: RESET_LOGIN_FORM });

export const loginUser = (userData) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      userData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data); // Check the user object
    const { token, userState } = response.data; // Assuming the backend sends `token` and `userState`
    dispatch(loginSuccess(userState));
    return { token, userState }; // Return the data
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Login failed";
    dispatch(loginFailure(errorMessage));
    return { error: errorMessage }; // Return the error
  }
};
