import React from 'react'

const UserProfile = ({user}) => {
  const {name,age,country} = user;
  return (
    <div>
      <h1> {name} {age} {country} </h1>
    </div>
  );
};

export default UserProfile;
