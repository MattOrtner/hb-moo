import "./App.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      style={{ height: "100vh", width: "100vw", backgroundColor: "blueviolet" }}
    >
      This is the main app
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="home">Home</Link>
        <Link to="favorites">Favorites</Link>
        <Link to="settings">Settings</Link>
        <Outlet />
      </nav>
    </div>
  );
}

export default App;
