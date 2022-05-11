import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";

import "./App.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userChoice, setUserChoice] = useState("");

  return (
    <div className="App">
      <div className="outer-container">
        {/* {isLoggedIn && <NavigationBar />} */}
        <div className="screens">
          {!userChoice && <ProfileScreen setUserChoice={setUserChoice} />}
          {userChoice && <HomeScreen user={userChoice} />}
        </div>
      </div>
    </div>
  );
}

export default App;
