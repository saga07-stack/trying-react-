import React, { useState } from 'react'

const  App = () => {
  const [newNote , setNewNote]= useState("");
  const [notes, setNote] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const handelAddNote = () =>{
    const upDatedNote = {
      id: Date.now()+ Math.random(),
      text: newNote,
    };
    setNote([...notes , upDatedNote]);
    setNewNote("");
  };
  const handelDelete = (id)=>{
    const upDatedNote = notes.filter((note)=>(
       (id !== note.id)
    ))
   setNote(upDatedNote);
  }
  // EDIT STart
  const handelEdit=(id,text)=>{
     setEditingId(id);
     setEditingText(text)
  } 
  // handel cancel edit
  const handelEditCancel = ()=>{
    setEditingId(null);
    setEditingText("");
  }
  //  handel editSave
  const handelEditedSave = (id) =>{
    const upDatedNote = notes.map((note)=>(
       id === note.id ? {...note, text:editingText} : note
    ));
  setNote(upDatedNote);
  };
  console.log(notes);
  return (
    <div>
      <h1>Note App</h1>
      <input type="text" placeholder='Enter Note' 
      value={newNote}
      onChange={(e) => setNewNote(e.target.value)} />
      <button onClick={handelAddNote} >Add</button>
      <input type="text" placeholder='Search' />
      <button>Search</button>
      <ul>
        {notes.map((note)=>(
          <li key={note.id} >
            {editingId === note.id ? ( 
              <div>
                <input type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)} />
             <button onChange={()=> handelEditedSave(note.id)}  >Save</button>
             <button onClick={handelEditCancel} >Cancel</button>
            </div> ) : (
              <div>
                 {note.text} 
                <button onClick={()=> handelEdit (note.id, note.text)} >Edit</button>
                 <button onClick={()=>handelDelete(note.id)} >Delete</button>

              </div>
            ) }
             </li>
        ))}
      </ul>
      
    </div>
  );
};

export default  App;