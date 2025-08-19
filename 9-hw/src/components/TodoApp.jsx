import React, { useState } from 'react'

const  TodoApp = () => {
    const [newTask, setNewTask] = useState("");
    const handelChange = (e)=>{
        setNewTask(e.target.value);
    };
    const [taskss, setTasks] = useState([]);
    const handelAdd = () =>{
        const tasks = {
            id : Math.random() + Date.now(),
            text: newTask,
            completed: false,
        }
        setTasks([...taskss, tasks]);
        setNewTask("")

    };
 const handelDelete = (id)=>{
    const updatedTask = taskss.filter((tasks)=> 
    id === tasks.id 
    )
    setTasks(updatedTask);
 }
 const handelDone = (id)=>{
    const updatedTask = taskss.map((tasks)=>
   id !== tasks.id ? {...tasks , completed : !tasks.completed } : tasks  
    );
 }
  return (
    <div>
        <h1>To do app</h1>
        <input type="text" 
        placeholder='Write down'
        onChange={handelChange}
        value={newTask}
        />
        <button onClick={handelAdd} >Add</button>
        <ul>
        {taskss.map((task)=>(
            <li key={task.id}> {task.text} <button onClick={()=>handelDelete(tasks.id)} >❌</button>
            <button onClick={()=>handelDone(tasks.id)} >✅</button> </li>
        ))}

        </ul>
    </div>
  )
}

export default  TodoApp