import React from 'react'

const EventDetail = (props) => {
  const {title, location, date} = props.event;
  return (
    <div>
      <h1>{title}</h1>
      <h2> {location} </h2>
      <h2> {date} </h2>
    </div>
  );
};

export default EventDetail;
