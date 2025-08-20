
import React, { useState } from 'react'
const text = 
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi";
    

const  App = () => {
  const [show, setShow] = useState(false);
  const handelReadeMore = ()=>{
    setShow((prev) => !prev);
  }
  return (
    <div>
    <h1> This is text</h1>
    <p>
      {show ? text: `${text.substring(0,10)}...`  } 
      { " " } <span onClick={handelReadeMore} > ReadMore</span> 
      </p>
    </div>
  )
}

export default  App