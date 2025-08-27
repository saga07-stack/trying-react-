import React from 'react'

const  Celsius = ({onCelsiusChange,celsius}) => {
  return (
    <div>
        <label htmlFor="">
            Enter in Celsius : 
        </label>
        <input type="number"
        placeholder='Enter in Celsius '
        onChange={(e) => onCelsiusChange(e.target.value)}
        value={celsius} />
       
    </div>
  )
}

export default  Celsius