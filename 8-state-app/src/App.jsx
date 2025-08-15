import React, { useState } from 'react'

const  App = () => {
  const [firstTask, setNewTask] = useState("");
  const [finalTasks, setFinalTasks] = useState([]);
  const handelChange = (e) =>{
  setNewTask(e.target.value)
  };
  
  return (
    <div>
      <h1>To Do App</h1>
      <input onChange={handelChange} type="text" placeholder='Enter your task' />
      <button  >Add</button>
    </div>
  )
}

export default  App