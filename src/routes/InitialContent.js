import React from "react";
import { useLocation } from "react-router-dom";

const InitialContentScreen = () => {
  // let location = useLocation();

  return (
    <div>
      {/* <h1>Good Day {`${location.state.user.name}`}!</h1> */}
      <h1>Good Day</h1>
    </div>
  );
};

export default InitialContentScreen;
