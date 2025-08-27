import React from 'react'
import Celsius from './components/Celsius';
import Fahrenheit from './components/Fahrenheit';
import { useState } from 'react';
const  App = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  // celsius to fahrenheit 
  const toFahrenheit = (celsius) =>{
    const num = Number(celsius);
   return ((num* 9) /5 + 32).toFixed(2);
  }
    // fahrenheit to celsius 
  const toCelsius = (fahrenheit) =>{
    const num = Number(fahrenheit);
    return (((num-32)*5) /9).toFixed(2);
  }

  const handelFahrenheitChange = (value)=>{
   setFahrenheit(value);
    setCelsius(value === "" ? " " : toCelsius(value))
  }
  const handelCelsiusChange = (value)=>{
  setCelsius(value)
  setFahrenheit( value === "" ? "" : toFahrenheit(value));
  }
  return (
    <div>
      <h1>Celsius Fahrenheit Converter</h1>
      <Celsius
      onCelsiusChange={handelCelsiusChange}
      celsius= {celsius} 
      
      >

      </Celsius>
      <Fahrenheit
       onFahrenheitChange= {handelFahrenheitChange}
      fahrenheit={fahrenheit}
      >

      </Fahrenheit>

    
    </div>
  );
};
export default  App;