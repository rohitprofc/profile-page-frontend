import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import './ProfilePage.css';

const ProfilePage = () => {
  const user = {
    profilePicture: 'https://res.cloudinary.com/dtdhmbtcg/image/upload/v1717091701/IMG_20210802_094632_ajd4cw.jpg',
    name: 'Rohit Kavuluri',
    email: 'kavuluri.rohit@gmail.com',
    bio: 'Hi! I\'m a Full Stack Developer passionate about growth, innovation, and positive change. Seeking new opportunities to elevate my skills and contribute to impactful projects. Let\'s build a better future!'
  };

  return (
    <div className="profile-page">
      <ProfilePicture url={user.profilePicture} />
      <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
    </div>
  );
};

export default ProfilePage;
