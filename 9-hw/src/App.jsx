import React, { useState } from 'react'

const  App = () => {
  const [newTasks, setNewTask] = useState("");
  const handelChange = (e)=>{
    setNewTask(e.target.value);
  } ;
  const [tasks, setTasks ] = useState([]);
  const handelAdd = () =>{
    const task = {
      id: Math.random()+ Date.now(),
      text: newTasks,
      completed : false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  }
  const handelDone = (id)=>{
   const upDatedTasks =  tasks.map((task)=>
      id === task.id ? { ...task , completed: !task.completed} : task
    );
    setTasks(upDatedTasks);

  }
  const handelDelete = (id)=>{
    const upDatedTasks = tasks.filter ((task)=> 
    id !== task.id );
    setTasks(upDatedTasks);
  };
  return (
    <div>
      <h1>To  Do App</h1>
      <input type="text" 
      onChange={handelChange}
      placeholder='write your task' 
      value={newTasks}
      />
      <button onClick={handelAdd} >Add </button>
      <ul style={{margin:"5%"}} >
      {tasks.map((task)=>(
        <li style={{ textDecoration: task.completed ? "line-through" : "none" }}
 key={task.id} > {task.text} 
         <button onClick={()=>handelDone(task.id)} >✅</button> 
         <button onClick={()=>handelDelete(task.id)} >❌</button></li>
      ))}

        


      </ul>
    </div>
  );
};

export default  App;