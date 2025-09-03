import React from 'react'
import { useState } from 'react'

const  App = () => {
  const [count,setCount]= useState(0);
  const handelClickBtn = ()=>{
    console.log("buttonclicked")
  }
  return (
    <div>
      <h1>hello</h1>
      <button onClick={()=>setCount((prev)=> prev+1)} ></button>
    </div>
  )
}

export default  App