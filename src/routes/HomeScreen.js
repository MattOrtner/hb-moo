import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const HomeScreen = ({ user }) => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1400);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="homeScreen-container">
          <div>Hello {user.toUpperCase()}</div>
          <div className="navBar-container">
            <nav className="nav-bar">
              <NavLink className="navlink" to="home">
                home
              </NavLink>
              <NavLink className="navlink" to="favorites">
                favorites
              </NavLink>
              <NavLink className="navlink" to="settings">
                settings
              </NavLink>
            </nav>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default HomeScreen;
