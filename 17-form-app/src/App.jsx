import React from 'react'
import { useState } from 'react';

const  App = () => {
  const [formData, setFormData] = useState ({ 
    id: "",
     name: "", 
     email: "",
     doctor: "",
     SEX: "",
     problem:"",
     date:"",
     
     
     });
  const [formDatas, setFormDatas ] = useState([]);
 
const handelChange = (e)=>{
const {name, value} = e.target;
setFormData({...formData, id: Date.now()+ Math.random() , [name]:value})
};
const handelSubmit =(e)=>{
  e.preventDefault();
  setFormDatas([...formDatas, formData]);
  setFormData({id:"",name:"", Age:"",phone:"",SEX:"", doctor:"", problem:"", dates:"",})
  
}
const handelDelete = (id)=>{
 setFormDatas (  formDatas.filter((data)=>
    data.id !== id 
  ))
}
console.log(formDatas)
  return (
    <div>
      <h1>form page</h1>
      <form action="" onSubmit={handelSubmit} >
        <label htmlFor="">name: </label>
        <input type="text"
        placeholder='name' 
        name='name'
        onChange={handelChange}
       value={formData.name} />
        <br />
        <label htmlFor="">Age: </label>
        <input value={formData.Age} type="text"
        placeholder='Age' 
        name='Age'
        onChange={handelChange}/>

        <br />
        <label htmlFor="">phone: </label>
        <input value={formData.phone} type="text"
        placeholder='phone' 
        name='phone'
        onChange={handelChange}/>

        <br />
        <label htmlFor="">SEX: </label>
        <input value={formData.SEX} type="text"
        placeholder='SEX' 
        name='SEX'
        onChange={handelChange}/>

        <br />
        <label htmlFor="">Doctor: </label>
        <input value={formData.doctor} type="text"
        placeholder='doctor' 
        name='doctor'
        onChange={handelChange}/>

        <br />
        <label htmlFor="">problem: </label>
        <input value={formData.problem} type="text"
        placeholder='problem' 
        name='problem'
        onChange={handelChange}/>

        <br />
        <label htmlFor="">date: </label>
        <input value={formData.date} type="text"
        placeholder='date' 
        name="date"
        onChange={handelChange}/>
        <button  >Add</button>
      </form>
      <ul>
        {formDatas.map((data)=>(
          <li key={data.id} > Name:  {data.name } AGE :  {data.Age}  phone - {data.phone}
            Sex: {data.SEX} Doctor: {data.Doctor}  Problem:  {data.problem}  Date:  {data.Date} 
          <button onClick={()=>handelDelete(data.id)} >Delete</button> </li>
        ))}
      </ul>
    </div>
  );
};

export default  App;