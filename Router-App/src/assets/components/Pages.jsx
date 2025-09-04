import React,{useLoadedData} from 'react'

const  Pages = () => {
  const users = useLoadedData();

  return (
    <div>
    <ul>
        {users.map((user)=>(
            <li key={user.id} > {user.title} </li>
        ))}
    </ul>
    </div>
  )
}

export default  Pages