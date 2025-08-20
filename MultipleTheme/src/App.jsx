import React, { useState } from 'react'
const themes = [
    { name: "Light", background: "white", color: "black" },
    { name: "Dark", background: "black", color: "white" },
    { name: "Solarized", background: "#fdf6e3", color: "#657b83" },
    { name: "Pink", background: "#ffe4e1", color: "#ff1493" },
    { name: "Blue", background: "#e0f7fa", color: "#00796b" },
    { name: "Green", background: "#e8f5e9", color: "#2e7d32" },
  ];

const  App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes[0])
  const handelChange = (e) =>{
    const upDatedThemes = themes.filter((theme)=>(
      theme.name === e.target.value
    ))
    setCurrentTheme(upDatedThemes[0]);
  }
  return(
    
   <div
   style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.color,
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        paddingTop: "50px",
        transition: "background-color 0.5s ease",
      }}
   >
    <h1>Multi theme select</h1>
    <select value= {currentTheme.name}
    onChange={handelChange} >
      {themes.map((theme)=>(
        <option value={theme.name}> {theme.name} </option>
      ))}
      <div>
        <h1> current Theme: <strong> {currentTheme.name} </strong>  </h1>
      </div>
    </select>
   </div>


  )
 
}

export default  App