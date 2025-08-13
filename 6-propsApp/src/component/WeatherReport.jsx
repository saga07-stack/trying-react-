import React from 'react'

const WeatherReport = (props) => {
  const {city , temperature, condition} = props.weather;
  return (
    <div>
      <h1>{city}  </h1>
      <h2> {temperature} </h2>
      <h2> {condition} </h2>
    </div>
  );
};

export default WeatherReport;
