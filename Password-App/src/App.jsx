
import React, { useState } from 'react'

const  App = () => {
  const [toggle, setToggle] = useState(false)
const handelToggle = ()=>{
  setToggle((prev)=> !prev);
};
  return (
    <div>
      <h1>PasswordToggle App</h1>
      <input type= {toggle ? "text" : "password"} />
      <button onClick={handelToggle} > {toggle ? "Hide" : "Show"} </button>
    </div>
  )
}

export default  App;