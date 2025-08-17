import React from 'react'
import { useFormState } from 'react-dom'

const  App = () => {
  const [newTask, setNewTask] = useFormState("");
  
  const handelAddTask = () =>{
    const  task = {
     id: Date.now() + Math.random(),
     text : newTask,
     complete: false,
    };
  };
  return (
    <div>
      <h1>To do App</h1>
      <input type="text" 
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder= "enter your task" />
      <button onClick={handelAddTask} > Add</button>
      <ul>
        <li>

        </li>
      </ul>
    </div>
  )
}

export default  App