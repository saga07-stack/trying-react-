import React, { createContext, useState } from 'react'
import Parent from './components/Parent';
const ThemeContext = createContext();
const  App = () => {
  const [theme, setTheme] = useState("light");

  return (

    <div style={{
      background: theme === "light" ? "white": "dark",
      color: theme === "light" ? "black" : "light",
      width: "100vw",
      height:"100vh"
    }} >
      <h1>Theme Changer</h1>
    <ThemeContext.Provider
    value={{theme, setTheme}}
    >
    <Parent/>

    </ThemeContext.Provider>
    </div>
  );
};

export default  App;
export {ThemeContext}