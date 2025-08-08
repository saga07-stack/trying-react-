import React from 'react'

const ErrorDisplay = ({errorMessage}) => {
  if(errorMessage.length !== 0) return null;
  return (
    <div>
      <h1 style={{color: "red"}}>error</h1>
    </div>
  );
};

export default ErrorDisplay;
