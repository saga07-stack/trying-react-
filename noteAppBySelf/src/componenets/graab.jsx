import React, { useState } from 'react'

const  App = () => {
  const [newNote , setNewNote] = useState("");
  const [notes, setNotes]= useState([]);
  const [searchNote, setSearchNote] = useState("");

   const handelSubmit = ()=>{
    const note = {
      id: Math.random()+ Date.now(),
      text: newNote,
      complete: false
    };
    setNotes([...notes, note]);
    setNewNote("");

   }
   //Delete
   const handelAccomplished = (id)=>{
       const filteredTask = notes.filter((note)=>(
        id !== note.id
       ))
       setNotes(filteredTask);
   }
   // search
  
    const filterNotes = notes.filter((note)=>(
      note.text.toLowerCase().includes(searchNote.toLowerCase())
    ))
    
   
  return (
    <div>
      <h1>Note App</h1>
      <input type="text" 
      placeholder='Enter Your note'
      value={newNote}
      onChange={((e)=>setNewNote(e.target.value))}/>
      <button onClick={handelSubmit} >Submit</button>
       <input type="text" 
       placeholder='Search' 
       onChange={(e)=>setSearchNote(e.target.value)} /> 
        <button >Search</button>
       <div>
        {filterNotes.map((note)=>(
          <li key={note.id} > {note.text} 
          <button onClick={()=>handelAccomplished(note.id)} >Accomplished </button> </li>
        ))}
       </div>
   <h1>{searchNote}</h1>


    </div>
  );
};

export default  App;