import React from 'react'

const TravelDestination = (props) => {
  return (
    <div>
      <h1> {props.location} , {props.country} is best visited in {props.bestTimeToVisit} </h1>
    </div>
  );
};

export default TravelDestination;
