import React from 'react'
import ListingTasks from "./ListingTasks"
const  UnorderListing = ({ tasks, handelDelete, handelDone}) => {
  return (
   
    <ul>
      {tasks.map((task) => (
        <ListingTasks
         key={task.id}
          task={tasks}
          handelDelete={handelDelete}
          handelDone={handelDone}
        />
      ))}
    </ul>
  
   
  )
}

export default  UnorderListing;

