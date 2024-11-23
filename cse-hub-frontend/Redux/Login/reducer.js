// Login/reducer
import {
  SET_EMAIL,
  SET_PASSWORD,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESET_LOGIN_FORM,
} from "./actionTypes";

const initialState = {
  email: "",
  password: "",
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, isLoading: false, error: null };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case RESET_LOGIN_FORM:
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
