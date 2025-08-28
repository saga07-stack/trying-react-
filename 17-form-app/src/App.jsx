import React, { useState } from 'react'

const  App = () => {
  const [formDate, setFormData] = useState({ id: Date.now(), name: "", email: ""});
  const [formDatas, setFormDatas] = useState("");
  const handelChange = (e)=>{
   const {name, value} = e.target;
   setFormData ({...formDatas, [name]:value , id: Date.now()})
   
  }
const handelSubmit= (e)=>{
  e.preventDefault();
  setFormDatas([...formDatas , formDate])
  setFormData({id:"", name:"", email:""})
}
const handelDelete = (id) =>{
  setFormDatas(formDatas.filter((data)=> data.id === id ));
}
console.log(formDate)
  return (
    <div>
      <h1>form</h1>
     
      <form action="" 
      onSubmit={handelSubmit}>
         <label htmlFor="">name :</label>
        <input  onChange={handelChange} type="text " 
        name='name'
        placeholder='name'
         /> 
         <br />
          <label htmlFor="">email :</label>
        <input  onChange={handelChange} type="text " 
        name='email'
        placeholder='email'
         /> 
         <button type='submit' >Submit</button>
      </form>
      <ul>
        {formDatas.map((data)=>(
          <li key={data.id} > {date.name}  <button onClick={()=>handelDelete(data.id)} > Delete</button> </li>
        ))}
      </ul>
    </div>
  )
}

export default  App