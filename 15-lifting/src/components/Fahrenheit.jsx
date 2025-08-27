import React from 'react'

const  Fahrenheit = ({onFahrenheitChange, fahrenheit}) => {
  return (
    <div>
        <label htmlFor="">
            Fahrenheit to celsius
        </label>
        <input type="number" 
        placeholder='Enter a Fahrenheit'
        value={fahrenheit}
        onChange={(e)=>onFahrenheitChange(e.target.value)}
        />
    </div>
  )
}

export default  Fahrenheit