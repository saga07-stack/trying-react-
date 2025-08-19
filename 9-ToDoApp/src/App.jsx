import React, { useState } from 'react'

const  App = () => {
  const [newTask, setNewTask] = useState("");
  const handelChange = (e) =>{
    setNewTask(e.target.value);
  };
  const [tasks, setTask] = useState([]);
  const  handelAdd = () =>{
    if(newTask.trim() === "") return;
    const task = {
      id : Math.random() + Date.now(),
      text: newTask,
      complete: false,
    };
    setTask ([...tasks,task]);
    setNewTask("");
  };
  const handelToggel = (id)=>{
    const updatedTask = tasks.map ((task)=>
     id === task.id ? {...task,completed : !task.completed} : task
    );
    setTask(updatedTask);
    
  }
  const handelDelete = (id) =>{
    const confirmDeletion = confirm("are you sure want to delete ");
    if (confirmDeletion) {
   const updatedTask = tasks.filter ((task)=>
    task.id !== id  )
    setTask(updatedTask);
    }
 
  }
  return (
    <div>
      <h1 >  to do app</h1>
      <input type="text" placeholder='enter your task' 
       onChange={handelChange}
       value={newTask}


      />
      <button onClick={handelAdd}  >Add</button>

      <ul>
        {tasks.map((task)=>(
          <li style={{textDecoration:task.completed ? "line-through" : "none", 
            color:task.completed ? "gray" : "white"
          }} key={task.id} > {task.text} <button onClick={() => handelToggel(task.id)} >✅</button> 
          <button onClick={()=>handelDelete(task.id)} >❌</button>
           </li>
        ))}
      </ul>
    </div>
  );
};

export default  App;