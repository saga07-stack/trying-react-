import React from 'react'

const TravelDestinations = ({location, country , bestTimeToVisit}) => {
  return (
    <div>
      <h1> {location}, is in {country} is best visited in {bestTimeToVisit}  </h1>
    </div>
  );
};

export default TravelDestinations;
