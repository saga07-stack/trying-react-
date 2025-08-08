import React from 'react'
// const isLoggedIn = true;
const WelcomeMessage = ({isLoggedIn}) => {
    if (!isLoggedIn) return null;
  return (
    <div>
      <h1>welcome back</h1>
    </div>
  );
};

export default WelcomeMessage;
