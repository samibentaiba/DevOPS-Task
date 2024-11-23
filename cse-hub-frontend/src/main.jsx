// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Help from "./pages/Help.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import Courses from "./pages/Courses.jsx";
import Policy from "./pages/Policy.jsx";
import Timetables from "./pages/Timetables.jsx";
import StudentStories from "./pages/StudentStories.jsx";
import Settings from "./pages/Settings.jsx";
import Terms from "./pages/Terms.jsx";
import App from "./App";
import { Provider } from "react-redux";
import { store as reduxStore } from "../Redux/store";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

// Configure the store for AuthProvider with required params
const authStore = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Navigate to="/home" /> },
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "about", element: <About /> },
      { path: "help", element: <Help /> },
      { path: "courses", element: <Courses /> },
      { path: "privacy", element: <Policy /> },
      { path: "terms", element: <Terms /> },
      { path: "timetables", element: <Timetables /> },
      { path: "student-stories", element: <StudentStories /> },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <AuthProvider
        authType="cookie"
        authName="_auth"
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
        store={authStore}
      >
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
