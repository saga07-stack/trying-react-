// import React,{useState, useEffect} from 'react'

// const  App = () => {
//   const [users, setUsers]= useState([]);
//   const [search, setSearch]= useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(()=> {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//      .then ((response)=>{
//        if(!response.ok) throw new Error ("Network Error")
//      return response.json()
//      } )
//      .then ((data)=> {
//       setUsers(data);
//       setLoading(true);
//       console.log(data)
//      })
//      .catch(err=>{
//       setError(err.message);
//       setLoading(false);
//      })
     
//   },[]);
//   const filterUsers = users.filter((user)=> user.title.toLowerCase()
//   .includes(search.toLowerCase()));
//   return (
//     <div>
//       <h1>User search</h1>
//       <input type="text" 
//       onChange={(e)=> setSearch(e.target.value)} />
//       <ul>
//         {filterUsers.map((user)=>(
//           <li key={user.id} > 
//           {user.title} - {user.body}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default  App

import React,{useState,useEffect} from 'react'

const  App = () => {
  const [posts, setPosts]= useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")
  useEffect(()=> {
    try{

 
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>  {
    if(!response.ok) throw new Error ("Network Error");
    return response.json();

    })
    .then (data=>{
     setPosts(data);
     setLoading(false);   
     })
      } catch (err){
        setError(err.message);
        setLoading(true);
        
      };
    
  },[]);
  if(loading) return <h1>Loading..</h1>
  if(error) return <h1> Error: {error} </h1>
  return (
    <div>
      <h1>user search</h1>
      <ul>
        {posts.map((post)=>(
          <li key={post.id} > 
           {post.title} </li>
        ))}
      </ul>
    </div>
  )
}

export default  App