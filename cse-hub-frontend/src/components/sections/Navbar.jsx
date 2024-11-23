// Navbar.jsx

// Navbar.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authStore } from "../../../Redux/store.js";
import { logout } from "../../../Redux/store.js";
import SecondaryButton from "../../components/ui-elements/SecondaryButton.jsx";
import PrimaryButton from "../../components/ui-elements/PrimaryButton.jsx";
import CSE_HUB from "../../../public/images/logo.svg";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
const Navbar = () => {
  console.log(useIsAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);

  const handleAvatarClick = () => {
    setShowAvatarDropdown(!showAvatarDropdown);
  };

  const handleLogout = () => {
    // Clear the user session in both Redux and react-auth-kit store
    dispatch(logout()); // Clear the Redux state
    authStore.removeState(); // Remove the authentication state from react-auth-kit store
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Spacing-XL, 2rem) var(--Spacing-3XL, 4rem)",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        background: "var(--Grayscale-gray-100, #F5F6FA)",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--Spacing-4XL, 64px)",
          listStyleType: "none",
        }}
      >
        <li>
          <Link to="/">
            <img
              src={CSE_HUB}
              alt="CSE_Hub_logo"
              style={{
                width: "90.879px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            />
          </Link>
        </li>
        <li>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--Units-2xl, 40px)",
            }}
          >
            <Link
              to="/"
              style={{
                color: "var(--light-blue-text, #0A0A0F)",
                fontFamily: "var(--Text-font-family, 'Space Grotesk')",
                fontSize: "16px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                color: "var(--light-blue-text, #0A0A0F)",
                fontFamily: "var(--Text-font-family, 'Space Grotesk')",
                fontSize: "16px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </ul>
        </li>
      </ul>

      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--Units-l, 2rem)",
        }}
      >
        {isAuthenticated ? (
          <>
            <div
              style={{
                display: "flex",
                width: "var(--Spacing-2xl, 48px)",
                height: "var(--Spacing-2xl, 48px)",
                padding: "var(--Spacing-xs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 19C4.71667 19 4.47934 18.904 4.288 18.712C4.09667 18.52 4.00067 18.2827 4 18C3.99934 17.7173 4.09534 17.48 4.288 17.288C4.48067 17.096 4.718 17 5 17H6V10C6 8.61667 6.41667 7.38767 7.25 6.313C8.08334 5.23834 9.16667 4.534 10.5 4.2V3.5C10.5 3.08334 10.646 2.72934 10.938 2.438C11.23 2.14667 11.584 2.00067 12 2C12.416 1.99934 12.7703 2.14534 13.063 2.438C13.3557 2.73067 13.5013 3.08467 13.5 3.5V4.2C14.8333 4.53334 15.9167 5.23767 16.75 6.313C17.5833 7.38834 18 8.61734 18 10V17H19C19.2833 17 19.521 17.096 19.713 17.288C19.905 17.48 20.0007 17.7173 20 18C19.9993 18.2827 19.9033 18.5203 19.712 18.713C19.5207 18.9057 19.2833 19.0013 19 19H5ZM12 22C11.45 22 10.9793 21.8043 10.588 21.413C10.1967 21.0217 10.0007 20.5507 10 20H14C14 20.55 13.8043 21.021 13.413 21.413C13.0217 21.805 12.5507 22.0007 12 22Z"
                    fill="#0A0A0A"
                  />
                </svg>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "var(--Spacing-2xl, 48px)",
                height: "var(--Spacing-2xl, 48px)",
                padding: "var(--Spacing-xs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.85 17.1C6.7 16.45 7.65 15.9377 8.7 15.563C9.75 15.1883 10.85 15.0007 12 15C13.15 14.9993 14.25 15.187 15.3 15.563C16.35 15.939 17.3 16.4513 18.15 17.1C18.7333 16.4167 19.1877 15.6417 19.513 14.775C19.8383 13.9083 20.0007 12.9833 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.105 4.77833 14.2173 3.99933 12 4C9.78267 4.00067 7.895 4.78 6.337 6.338C4.779 7.896 4 9.78333 4 12C4 12.9833 4.16267 13.9083 4.488 14.775C4.81333 15.6417 5.26733 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1873 12.6627 9.512 11.988C8.83667 11.3133 8.49933 10.484 8.5 9.5C8.50067 8.516 8.83833 7.68667 9.513 7.012C10.1877 6.33733 11.0167 6 12 6C12.9833 6 13.8127 6.33767 14.488 7.013C15.1633 7.68833 15.5007 8.51733 15.5 9.5C15.4993 10.4827 15.162 11.312 14.488 11.988C13.814 12.664 12.9847 13.0013 12 13ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22Z"
                    fill="#0A0A0A"
                  />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <>
            <SecondaryButton txt="Log in" to="/login" />
            <PrimaryButton txt="Sign up" to="signup" />
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
