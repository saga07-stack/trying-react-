import WeatherLogo from "../src/assets/cloud.png";
import React from 'react'

const WeatherIcon = () => {
  return (
    <div>
      <img src={WeatherLogo} alt="cloud" />
    </div>
  );
};

export default WeatherIcon;
