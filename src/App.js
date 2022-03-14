import ProfileScreen from "./screens/ProfileScreen";
import "./App.css";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <div className="outer-container">
        {isLoggedIn && <NavigationBar />}
        <div className="screens">
          <ProfileScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
