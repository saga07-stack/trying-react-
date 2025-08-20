import React from 'react'

const  ToDoItem = ({task, handelDelete,handelToggle}) => {
  return (
    <div>        
          <li
           style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginBottom: "5px",
        }} 
        > {task.text} 
           <button onClick={()=>handelToggle(task.id)} >✅</button>
           <button onClick={()=> handelDelete(task.id)} >❌</button> </li> 
        
    </div>
  );
};

export default  ToDoItem;