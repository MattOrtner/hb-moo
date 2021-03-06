import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const HomeScreen = () => {
  let location = useLocation();
  // console.log("location.state.user.name", location.state.user.name);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  function FullScreen() {
    return (
      <div className="home-screen-container">
        <nav className="nav-bar">
          <Link style={{ color: "white", paddingBottom: 30 }} to="/home">
            Home
          </Link>
          <Link style={{ color: "white", paddingBottom: 30 }} to="/favorites">
            Favorites
          </Link>
          <Link style={{ color: "white", paddingBottom: 30 }} to="/settings">
            Settings
          </Link>
          <Link style={{ color: "white", paddingBottom: 30 }} to="/search">
            Search
          </Link>
        </nav>
        {/* <div className="right-side-home"> */}
        <Outlet />
        {/* </div> */}
      </div>
    );
  }

  let LandingScreen = loading ? <LoadingScreen /> : <FullScreen />;

  return <>{LandingScreen}</>;
};

export default HomeScreen;
