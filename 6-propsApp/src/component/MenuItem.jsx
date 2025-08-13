import React from 'react'

const MenuItem = (props) => {
    const {name, price, isVegetarian} = props.menu;
  return (
    <div>
      <h1> {name} {price} {isVegetarian ? `isVegetarian ${isVegetarian}`: false} </h1>
    </div>
  );
};

export default MenuItem;
