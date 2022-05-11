import React, { useState } from "react";

const HomeScreen = ({ user }) => {
  const [favorites, setFavorites] = useState(
    user.favorites ? [...user.favorites] : []
  );

  const addFavoriteHandler = (contentId) => {
    setFavorites([...favorites, contentId]);
  };

  return (
    <div>
      <div>Hello {user.toUpperCase()}</div>
      <button onClick={() => addFavoriteHandler("contentId")}>
        add to favorite
      </button>
    </div>
  );
};

export default HomeScreen;
