import React, { useContext } from 'react'
import { UserContext } from '../App'

const  Navbar = () => {
  const {user, setUser} = useContext(UserContext) // usercontext bhaneako hamlea rakhera ko value
  return (
    <div>
      <h1>nav Bar</h1>
      {user ? (
      <button onClick={()=>setUser(null)} >LogOut</button>

      ):(

      <button onClick={()=>setUser("shyam")} >LogIn</button>
      )}

    </div>
  );
};

export default  Navbar;