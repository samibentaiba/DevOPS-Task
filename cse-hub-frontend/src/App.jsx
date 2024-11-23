// App.jsx
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import { Provider } from "react-redux";
import { store, authStore } from "../Redux/store";
import { AppProvider } from "./context/AppContext";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 1);
  }, [location.pathname]);

  return (
    <Provider store={store}>
      <AppProvider>
        <div className="app-container">
          <Navbar/>
          <main className="content">
            <Outlet /> {/* Render the current route */}
          </main>
          <Footer />
        </div>
      </AppProvider>
    </Provider>
  );
}

export default App;
