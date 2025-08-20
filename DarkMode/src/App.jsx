
import React, { useState } from 'react'

const  App = () => {
  const [dark, setDarkMode] = useState(false);
  const handelChange = ()=>{
    setDarkMode((prev) => !prev);
  } ;
  return (
    <div style={{
      backgroundColor: dark ? "#121212" : "#E0E0E0",
      color: dark ? "#E0E0E0" : "#121212",
      height: "100vh",
      width: "100vw",
      paddingTop: "50px",
      transition: "background-color 0.10s ease",
      textAlign:'center',
    }} >
      <h1> {dark ? "Dark Mode🌕" : "Light Mode☀️"} </h1>
      <button onClick={handelChange} > {dark ? "Switch To Light" : "Switch To Dark"} </button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit ab dolorum hic, corrupti autem aperiam excepturi fugiat consequatur modi minima voluptatum consectetur. Alias corrupti numquam temporibus commodi adipisci libero.
      Iusto voluptas fugiat quos nemo! Qui eum unde officia pariatur eveniet nobis iure quod esse suscipit dolores, officiis dolorum. Atque quia magni distinctio enim placeat, rerum aperiam quasi delectus soluta!
      Nihil ratione officiis id laboriosam, laborum veniam eius, sunt deserunt deleniti natus expedita at minima optio minus maxime praesentium ipsa ducimus facilis delectus tempore ad amet libero magnam. Ea, assumenda!</p>
    </div>
  );
};

export default  App;