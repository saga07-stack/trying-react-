import React from 'react'

const CustomButton = ({onClick}) => {
    if(!onClick) return null;
   
  return (
    <div>
      <button>Click Me</button>
    </div>
  );
};

export default CustomButton;
