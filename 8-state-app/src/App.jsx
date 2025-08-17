import React, { useState } from 'react'

const  App = () => {
  const [firstTask, setNewTask] = useState("");
  const [finalTasks, setFinalTasks] = useState([]);
  const handelChange = (e) =>{
  setNewTask(e.target.value)
  };
  const handelAddTask = () =>{
    const task = {
      id: Date.now() + Math.random(),
      task: finalTasks,
      complete:false,
    }
  }
  return (
    <div>
      <h1>To Do App</h1>
      <input onChange={handelChange} type="text" placeholder='Enter your task' />
      <button onClick={handelAddTask}  >Add</button>
      <button></button>
    </div>
  )
}

export default  App