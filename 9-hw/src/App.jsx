import React, { useState } from 'react'

const  App = () => {
   const [newTasks, setNewTask] = useState("");
   const handelChange  = (e) =>{
    setNewTask(e.target.value);
   };
 
   const [tasks, setTasks] = useState([]);
   const handelAdd = ()=>{
    const upDatedTasks = {
      id: Math.random() + Date.now(),
      text: newTasks,
      completed : false,
    };
    setTasks([...tasks, upDatedTasks]);
    setNewTask("")
   };
   const handelDone = (id)=>{
    const upDatedTasks = tasks.map((task)=>(
      id === task.id ? {...task, completed : !task.completed} : task
    ));
    setTasks(upDatedTasks);
    
   };

  const handelDelete = (id) =>{
    const confirmDeletion = confirm ("are you sure want to delete");
    if (confirmDeletion) {
const updatedTasks = tasks.filter ((task)=>
      id !== task.id 
    );
    setTasks (updatedTasks);
    }
    
  }
  return (
    <div>
      <h1>To Do App</h1>
      <input type="text" 
      placeholder='Enter your task'
      onChange={handelChange}
       value={newTasks}
      />
      <button onClick={handelAdd}>Add</button>
      <ul>
        {tasks.map((task)=> 
        <li key={task.id}> 
         <button onClick={()=> handelDone(task.id)} style={{ textDecoration: task.completed ? "line-through" : "none" }}> ✅ {task.text}</button> 
          <button onClick={ ()=> handelDelete (task.id)} >❌</button> </li> )}
      </ul>
    </div>
  );
};

export default  App;