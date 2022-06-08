import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserChoiceScreen from "./routes/UserChoiceScreen";
import HomeScreen from "./routes/HomeScreen";
import SettingsScreen from "./routes/SettingsScreen";
import FavoritesScreen from "./routes/FavoritesScreen";
import InitialContentScreen from "./routes/InitialContent";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserChoiceScreen />} />
      <Route path="home" element={<HomeScreen />}>
        <Route index element={<InitialContentScreen />} />
        <Route path="favorites" element={<FavoritesScreen />} />
        <Route path="settings" element={<SettingsScreen />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
