import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const  Child = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark":"light")
    }
  return (
    <div>
        <button onClick={toggleTheme} >Change</button>
        <h1>{theme}</h1>
    </div>
  )
}

export default  Child