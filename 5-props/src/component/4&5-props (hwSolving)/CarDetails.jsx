import React from 'react'

const CarDetails = (props) => {
  return (
    <div>
      <h1> The car is a {props.year} {props.make} {props.model} </h1>
    </div>
  );
};

export default CarDetails;
