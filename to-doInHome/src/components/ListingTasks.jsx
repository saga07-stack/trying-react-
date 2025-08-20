import React from 'react'

const  ListingTasks = ({task, handelDelete, handelDone }) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      
        <button onClick={()=> handelDone(task.id)} >✅</button>
         <button onClick={()=> handelDelete (task.id)} >❌</button>  

     </li>

    
  )
}

export default  ListingTasks