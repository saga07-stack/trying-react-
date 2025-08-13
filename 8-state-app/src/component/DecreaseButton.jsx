import React from 'react'

const DecreaseButton = ({onDecrease}) => {
  return (
    <div>
      <button onClick={onDecrease} >Minus</button>
    </div>
  );
};

export default DecreaseButton;
