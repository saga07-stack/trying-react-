import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import Location from "./Location";
import React from 'react'

const WeatherCard = () => {
  return (
    <div>
      <WeatherIcon/>
      <Location/>
      <Temperature/>
    </div>
  );
};

export default WeatherCard;
