import React, { useContext } from 'react'
import { UserContext } from '../App'

const  Home = () => {

  const {user,setUser} = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      {user ? (
       <h1>Welcome {user}</h1>
      ): (
      <h1>Please login </h1>
      )}

    </div>
  )
}

export default  Home