import React from 'react'

const  InterFace = ({onChange, onAdd, newTasks}) => {

  return (
    <div>
        <h1>To Do App With Components</h1>
        <input
         type="text" 
        placeholder='Enter Your Text ' 
        onChange={onChange}
        value={newTasks}
        />
        <button onClick={onAdd} >Add</button>
    </div>
  );
};

export default  InterFace;