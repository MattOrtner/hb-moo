import React from "react";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loader">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <span className="message-container">Loading your content ...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
