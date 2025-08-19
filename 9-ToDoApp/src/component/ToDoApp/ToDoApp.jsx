import React, { useState } from 'react'

const  ToDoApp = () => {
    const [newTask,setNewTask] = useState("");
    const handelChange = (e) =>{
        setNewTask(e.target.value)
    }
    
  return (
    <div>
        <h1>To do app</h1>
        <input type="text" placeholder='enter your task' 
        onChange={handelChange}
        />
        <button onClick={handelAdd} >Add</button>
       <h1> {newTask} </h1>

    </div>
  );
};

export default  ToDoApp;