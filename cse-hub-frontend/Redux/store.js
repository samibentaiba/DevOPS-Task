// Redux/store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";
import createStore from "react-auth-kit/createStore";
// React Auth Kit store setup
const authStore = createStore({
  authName: "_auth", // The name of the cookie for storing authentication data
  authType: "cookie", // The type of storage (cookie)
  cookieDomain: window.location.hostname, // The domain for the cookie
  cookieSecure: window.location.protocol === "https:", // Secure cookie if using HTTPS
});

// Initial state for login with empty values for email and password
const initialState = {
  email: "",
  password: "",
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Check if email or password is already defined in the authStore, otherwise use empty values
const savedEmail = authStore.email || "";
const savedPassword = authStore.password || "";

// Update initial state based on values from authStore
const updatedInitialState = {
  email: savedEmail,
  password: savedPassword,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Create the loginSlice for managing login state
const loginSlice = createSlice({
  
  name: "login",
  initialState: updatedInitialState, // Use updatedInitialState
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    loginRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    loginFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    logout(state) {
      state.email = "";
      state.password = "";
      state.isAuthenticated = false;
    },
  },
});
export const {
  setEmail,
  setPassword,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} = loginSlice.actions;



import loginReducer from "./Login/reducer";

const store = configureStore({
  reducer: { login: loginReducer },
});

export default store;


// Export the Redux store and the React Auth Kit store
export { store, authStore };
