import React, {useCallback, useState} from 'react'
import Child from './components/Child';
const  App = () => {
  const [count, setCount] = useState(0);

  const handelClickBtn = useCallback (()=> {
    console.log("button clicked.");
  },[]);
    
  
  return (
    <div>
      <h1>UseCall back </h1>
  <button onClick={() => setCount(prev => prev + 1)} >Count</button>
  <h1> {count} </h1>
  <Child
  onclickBtn={handelClickBtn}
  />

  
    </div>
  );
};

export default  App;