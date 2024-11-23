// Redux/Signup/action.js
import {
  SET_FULL_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_DATE_OF_BIRTH,
  SET_GENDER,
  RESET_SIGNUP_FORM,
} from "./actionTypes";

// Action creators for updating signup form fields
export const setFullName = (fullName) => ({
  type: SET_FULL_NAME,
  payload: fullName,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setDateOfBirth = (dateOfBirth) => ({
  type: SET_DATE_OF_BIRTH,
  payload: dateOfBirth,
});

export const setGender = (gender) => ({
  type: SET_GENDER,
  payload: gender,
});

// Action to reset the form
export const resetSignupForm = () => ({
  type: RESET_SIGNUP_FORM,
});
// Redux/Signup/action.js
import axios from "axios";

// Base URL of your backend API
const BASE_URL = "http://localhost:6000/api/user";

// Action creator for signup
export const signupUser = (userData) => async (dispatch) => {
  try {
    // Make the POST request to the backend signup API
    const response = await axios.post(`${BASE_URL}/register`, userData);

    // On successful signup, reset the form
    dispatch({ type: RESET_SIGNUP_FORM });

    // You can handle the response here (e.g., show a success message or redirect)
    console.log(response.data.message);
    alert("Signup successful!"); // Optional: Show an alert or notification
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error(
      "Signup failed:",
      error.response?.data?.message || error.message
    );
    alert("Signup failed: " + (error.response?.data?.message || error.message));
  }
};
