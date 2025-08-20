import React from 'react'
import ToDoItem from './ToDoItem'
const  ToDoLIst = ({tasks,handelDelete,handelToggle}) => {
  return (
    <div>
        <ul>
            {tasks.map((task)=>( 
                <ToDoItem
                key={task.id}
                 task={task}
                 handelDelete={handelDelete}
                 handelToggle={handelToggle}

                ></ToDoItem>
            ))};
        </ul>
    </div>
  )
}

export default  ToDoLIst