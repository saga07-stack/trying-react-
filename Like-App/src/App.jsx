import React from 'react'
import { useState } from 'react';


const  App = () => {
  const [like , setLike] = useState(false);
  const [count, setCount] = useState(0);
   const handelLike = () =>{
    if(like){
    setLike(false);
    setCount((prev) => prev -1 )
    }else{
      setLike (true);
      setCount((prev)=> prev + 1 )
    }
   }
     return (
    <div style={{
      textAlign:"center", 
       height: "100vh",
        width: "95vw",
        padding: "20px",
        textAlign: "center",
      
      }} >
     <h1> Like App</h1>
     <button onClick={handelLike} > {like ? "❤️" : "🤍"} </button>
     <h1> {count} </h1>
    </div>
  );
};
