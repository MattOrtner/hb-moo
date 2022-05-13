import React, { useEffect, useState } from "react";
import ProfileButton from "../components/ProfileButton";
import USERS from "../data/dummy-data";
import { useNavigate } from "react-router-dom";

const ProfileScreen = ({ setUserChoice }) => {
  const navigation = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (USERS) setUsers([...USERS]);
  }, []);

  const signInHandler = (userName) => {
    setUserChoice(userName);
    navigation("home");
  };

  return (
    <div className="container">
      <div className="title">HB-M.O.</div>
      <div className="intro">Who is watching?</div>
      <div className="profile-container">
        {users ? (
          users.map((user) => (
            <ProfileButton
              signInHandler={signInHandler}
              key={user.id}
              user={user}
            />
          ))
        ) : (
          <div>Would you like to create a profile?</div>
        )}
      </div>
      <div className="create-user-container">
        <div className="new-user">+ adult</div>
        <div className="new-user">+ child</div>
      </div>
    </div>
  );
};

export default ProfileScreen;
