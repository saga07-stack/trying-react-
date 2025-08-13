import React from 'react'

const Button = ({onSubmit}) => {
  return (
    <div>
      <button onSubmit={onSubmit}>click me</button>
    </div>
  );
};

export default Button;
