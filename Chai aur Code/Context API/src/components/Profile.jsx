import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>plz login </h1>;
  return (
    <>
      <h1>Profile</h1>
      {user.username} <br />
      {user.password}
    </>
  );
};

export default Profile;
