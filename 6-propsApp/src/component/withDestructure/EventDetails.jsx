import React from 'react'

const EventDetails = ({event}) => {
  const {title, location, date} = event;
  return (
    <div>
      <h1> {title} </h1>
      <h2> {location}  {date} </h2>
    </div>
  );
};

export default EventDetails;
