import React, { useState } from 'react'
// newNote = string "Do homework"
// notes = [ { id, text} ]
const App = () => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handelAddNote = () => {
    const note = {
      id: Date.now() + Math.random(),
      text: newNote,
    }
    setNotes([...notes, note])
    setNewNote("")
  }

  const handleDelete = (id) => {
    const upDatedNotes = notes.filter((note) =>
      id !== note.id
    )
    setNotes(upDatedNotes);
  }

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  }

  console.log(editingId, editingText)
  const handelCancel = ()=>{
setEditingId(null);
setEditingText("");
  }

const handelSaveEdit = ( id ) =>{
const upDatedNotes = notes.map(note => id === note.id ? {...note, text: editingText} : note );
setNotes(upDatedNotes);
setEditingId(null);
setEditingText("");
};
console.log(notes)

  return (
    <div>
      <h1>Note-app</h1>
      <input
        type="text"
        value={newNote}
        placeholder='Enter Your Note'
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={handelAddNote}>Add</button>

      <input type="text" placeholder='Search' />
      <button>Search</button>
      <h1>{newNote}</h1>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {editingId === note.id ? (
              <div>
                <input value={editingText} 
                
                type="text"
                onChange={(e)=>setEditingText(e.target.value)}
                 />
                <button onClick={()=>handelSaveEdit(note.id)} >Save</button>
                <button onClick={handelCancel} >Cancel</button>
              </div>
            ) : (
              <div>
                {note.text}
                <button onClick={() => handleEdit(note.id, note.text)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(note.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
