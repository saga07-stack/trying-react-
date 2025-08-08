import React from 'react'

const UserBadge = ({isPremium}) => {
    if(!isPremium) return null;
  return (
    <div>
      <h1>Premium User</h1>
    </div>
  );
};

export default UserBadge;
