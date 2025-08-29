import React, { createContext, useState } from 'react'
 
 const UserContext = createContext();

const  App = () => {
  const [user, setUser]= useState(null);
  return (
    <div>
      <h1>Login System</h1>
      <UserContext.Provider
      value={{user, setUser}}>

      </UserContext.Provider>
    </div>
  )
}

export default  App
export{UserContext}