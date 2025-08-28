import React, { useState } from 'react'

const  App = () => {
  const [newNotes, setNewNotes]= useState("");
  const [search, setSearchNotes] = useState("");
  const [notes, setNotes]= useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const handelAdd = ()=>{
    const upDatedNotes = {
      id: Math.random() + Date.now(),
      text: newNotes,
    }
    setNotes([...notes, upDatedNotes]);
    setNewNotes("");
  }
 const handelDelete = (id)=>{
  const isDelete =  confirm ("Are you sure want to delete this note ");
  if (isDelete){
  const upDatedNotes = notes.filter((note)=>(
    id !== note.id 

  ));
  setNotes(upDatedNotes)
   };
 }
   const handelEdit = (id,text)=>{
    setEditingId(id);
    setEditingText(text);
   }
 const handelEditCancel = ()=>{
  setEditingId(null);
  setEditingText("");
 };
const handelSaveEdit = (id)=>{
  const upDatedNotes = notes.map  ((note)=>(
   id === note.id ? {...notes , text: editingText} : note
  ));
  setNotes(upDatedNotes);
  setEditingId(null);
  setEditingText("");
}
const filterSearch = notes.filter ((note )=>(
  note.text.toLowerCase().includes(search.toLowerCase())
))
  
  return (
    <div>
      <h1>Note App</h1>
      <input type="text"
      placeholder='Enter Your Note'
      value={newNotes}
      onChange={(e)=>setNewNotes(e.target.value)} />
      <button onClick={handelAdd} >Add</button>
      <input type="text " 
      placeholder='search'
      onChange={(e) => setSearchNotes(e.target.value)} />
      <button>Search</button>
      
      <ul>
        {filterSearch.map((note)=>( 
           
          <li key={note.id} >  
          {editingId === note.id ? (
            <div>
              <input type="text" 
              value={editingText}
              onChange={(e)=>setEditingText(e.target.value)}
               />
               <button onClick={()=>handelSaveEdit(note.id) } >save</button>
               <button onClick={handelEditCancel} >cancel</button>
            </div>

          ):(
          <div>
          {note.text} 
          <button onClick={()=>handelEdit(note.id,note.text)}  > Edit </button>
          <button onClick={()=>handelDelete(note.id)} >Delete</button> 

          </div>

          )}
          
          </li>

        ))}
      </ul>
   

    </div>
  )
}

export default  App