import React, { useEffect, useState } from "react";
import ProfileButton from "../components/ProfileButton";
import USERS from "../data/dummy-data";
const ProfileScreen = ({ setUserChoice }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (USERS) setUsers([...USERS]);
  }, []);

  return (
    <div className="container">
      <div className="title">HB-M.O.</div>
      <div className="intro">Who is watching?</div>
      <div className="profile-container">
        {users ? (
          users.map((user) => (
            <ProfileButton
              setUserChoice={setUserChoice}
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
