import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, loginUser } from "../../Redux/Login/action"; // Import the loginUser action
import { useNavigate } from "react-router-dom";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import InputField from "../components/cards/input-card/InputField.jsx";
import PrimaryButton from "../components/ui-elements/PrimaryButton.jsx";
import TextLinksToPages from "../components/cards/text-card/TextLinksToPages.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = useSignIn();

  // Local state for form fields
  const [localEmail, setLocalEmail] = useState("");
  const [localPassword, setLocalPassword] = useState("");

  // Accessing Redux state for loading and error handling
  const { isLoading, error } = useSelector((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      loginUser({ email: localEmail, password: localPassword })
    );

    if (result.error) {
      console.error("Login failed:", result.error);
    } else {
      const { token, userState } = result;
      const success = signIn({
        token,
        auth: { token, type: "Bearer" },
        userState,
        expiresIn: 3600,
      });

      if (success) {
        dispatch(setEmail(userState.email));
        dispatch(setPassword(localPassword));
        navigate("/dashboard");
      } else {
        console.log("Sign-in failed");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftColumn}>
        <h2 style={styles.heading}>Reconnect and continue growing</h2>
        <p>
          Log in to continue your learning, access favorites, and stay updated
          with the latest content and exclusive features.
        </p>
      </div>
      <div style={styles.rightColumn}>
        <h2 style={styles.heading}>Log in to CSE Hub</h2>
        <form style={styles.formColumn} onSubmit={handleSubmit}>
          {/* InputField for Email */}
          <InputField
            placeholder="Email"
            value={localEmail}
            onChange={(e) => setLocalEmail(e.target.value)}
          />
          {/* InputField for Password */}
          <InputField
            placeholder="Password"
            isPassword
            value={localPassword}
            onChange={(e) => setLocalPassword(e.target.value)}
          />

          {/* Display error if exists */}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {/* Show loading or submit button */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <PrimaryButton txt="Log in" full type="submit" />
          )}
        </form>

        {/* Links to other pages */}
        <TextLinksToPages
          textData={[
            { link: { text: "Forgot password?", url: "/forgot-password" } },
          ]}
          multiplinks={2}
          inpage
        />
        <TextLinksToPages
          textData={[
            {
              text: "Not a member yet?",
              link: { text: "Sign up", url: "/signup" },
            },
          ]}
          multiplinks={1}
          inpage
        />
      </div>
    </div>
  );
};

// Styling (same as your original styles)
const styles = {
  container: {
    display: "flex",
    padding: "var(--3xl, 64px)",
    alignItems: "flex-start",
    gap: "var(--xl, 32px)",
    alignSelf: "stretch",
  },
  leftColumn: {
    display: "flex",
    padding: "var(--xl, 32px)",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "var(--xl, 32px)",
    flex: "1 0 0",
    alignSelf: "stretch",
  },
  heading: {
    color: "var(--Neutral-gray-900, #0A0A0F)",
    fontFamily: "'Space Grotesk'",
    fontSize: "34px",
    fontWeight: "700",
    lineHeight: "40px",
    letterSpacing: "-0.5px",
  },
  rightColumn: {
    display: "flex",
    padding: "var(--xl, 32px)",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "var(--xl, 32px)",
    flex: "1 0 0",
    alignSelf: "stretch",
    borderRadius: "var(--md, 16px)",
    border: "2px solid var(--Neutral-gray-300, #9D9D9F)",
  },
  formColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "var(--lg, 24px)",
    flex: "1 0 0",
    alignSelf: "stretch",
  },
};

export default Login;
