import React from 'react';
import './ProfilePicture.css';

const ProfilePicture = ({ url }) => {
  return <img src={url} alt="Profile" className="profile-picture" />;
};

export default ProfilePicture;
