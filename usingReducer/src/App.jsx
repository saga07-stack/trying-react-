
import React, { useState, useReducer } from 'react'
const todoReducer = (state, action)=>{
  switch(action.type){
    case "ADD_TODO":
      return [
        ...state,
        {id: Date.now()+Math.random(), text: action.payload},] ;
   case "RESET":
    return state.filter ((todo)=> todo.id !== action.payload );
      default: 
      return state;
  }
 
}

const  App = () => {

  const [text, setText] = useState("");
  const [todos , dispatch] = useReducer(todoReducer,[]);
  const handelAdd = ()=>{
    dispatch({type: "ADD_TODO", payload: text});
    setText("");
  };
 
  return (
    <div>
      <h1>TO do app</h1>
      <input type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)} />
      <button onClick={handelAdd} >Add</button>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id} > {todo.text} 
          <button onClick={()=>dispatch({type: "RESET",payload: todo.id} )} >Delete</button> </li>
        ))}
      </ul>
    </div>
  )
}

export default  App