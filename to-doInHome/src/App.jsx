import React, { useState } from 'react'
import InterFace from './components/InterFace'
import UnorderListing from './components/UnorderListing';
const  App = () => {
  const [newTasks, setNewTasks] = useState("");
  const handelChange = (e) =>{
    setNewTasks(e.target.value);
  };
  const idGenerator = () => Math.random()+ Date.now();
  const [tasks, setTasks] = useState([]);
  const handelAdd = () =>{
   const task = {
    id: idGenerator(),
    text : newTasks,
    completed : false,

   };
   setTasks ([...tasks, task]);
   setNewTasks("");
  };
  const handelDelete = (id)=>{
    const upDatedTasks = tasks.filter((task)=>
     id !== task.id );

     setTasks(upDatedTasks);
 
  }

  const handelDone = (id)=>{
    const upDatedTasks = tasks.map((task)=>(
      id === task.id ? { ...task, completed: !task.completed} : task
    ));
    setTasks(upDatedTasks);
  }
  return (
    <div>
      <InterFace
      onChange = {handelChange}
      onAdd={handelAdd}
      newTasks={newTasks}
      ></InterFace>
      <UnorderListing
      handelDone = {handelDone}
      handelDelete = {handelDelete}
      tasks={tasks}
      ></UnorderListing>



    </div>
  );
};

export default  App;