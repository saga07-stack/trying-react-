import React from 'react'

const CarDetail = ({year, make , model,}) => {
  return (
    <div>
      <h1> The car is a {year} {make} {model} </h1>
    </div>
  );
};

export default CarDetail;
