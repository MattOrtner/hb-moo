import ProfileScreen from "./routes/ProfileScreen";
import HomeScreen from "./routes/HomeScreen";

import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LoadingScreen from "./routes/LoadingScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userChoice, setUserChoice] = useState("");

  const Settings = () => {
    return (
      <div>
        <div>This is the settings screen</div>
      </div>
    );
  };
  const Favorites = () => {
    return (
      <div>
        <div>This is the other thing</div>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProfileScreen setUserChoice={setUserChoice} />}
        />
        <Route path="loading" element={<LoadingScreen />} />
        <Route path="home" element={<HomeScreen user={userChoice} />}>
          <Route path="favorites" element={<Favorites />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
