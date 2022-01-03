import React from "react";

export const Profile = ({ profile }) => {
  return (
    <>
      <h1>{profile.name}</h1>
      <img src={profile.img} alt={profile.name} />
      <div>{profile.about}</div>
      <div>{profile.email}</div>
      <div>{profile.linkedin}</div>
    </>
  );
};
