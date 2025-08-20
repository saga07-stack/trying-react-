import React from 'react'

const  ToDoInput = ({newTask,setNewTask,handelAddTask}) => {
  return (
    <div>
      <input type="text" 
      placeholder='Enter your text'
      onChange={(e)=> setNewTask (e.target.value)}
      value={newTask}/>
      <button onClick={handelAddTask} >Add</button>
    </div>
  )
}

export default  ToDoInput