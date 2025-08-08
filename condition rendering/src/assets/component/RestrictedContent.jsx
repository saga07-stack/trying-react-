import React from 'react'

const RestrictedContent = ({age}) => {
    if(age < 18) return null;
  return (
    <div>
      <h1>You can view the content </h1>
    </div>
  );
};

export default RestrictedContent;
