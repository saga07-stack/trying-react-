import React from 'react'

const WeatherReports = ({weather}) => {
    const {city, temperature,condition} = weather;
  return (
    <div>
      <h1> {city} </h1>
      <h2> {temperature} {condition} </h2>
    </div>
  );
};

export default WeatherReports;
