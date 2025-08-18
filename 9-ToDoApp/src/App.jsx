import React, { useState } from 'react'

const  App = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handelChange = (e) =>{
  setNewTask(e.target.value);
  };
  // const randomId = () => Math.random() + Date.now();
  const handelAddTask = () =>{
    const task = {
      id:  Date.now()+ Math.random(), 
      text:newTask,
      complete: false,
    }
    setTasks([...tasks,task]);
    setNewTask("");
  };
const handelComplete = tasks.map((task)=>{
    task.id === id ? {...task, complete: task.complete} : task;
});
  return (
    <div>
      <h1> To Do App</h1>
      <input onChange={handelChange}
      value={newTask}
       type="text" placeholder='Enter Your Task' />

      <button onClick={handelAddTask }  >Add</button>
      <ul>
        { tasks.map((task)=>( <li key={task.id} > {task.text} <button onClick={()=> handelComplete(task)} >✅</button> </li> )
         
        )}
         
      </ul>
    </div>
  );
};

export default  App;