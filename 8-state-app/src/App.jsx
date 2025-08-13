import React, { useState } from 'react'
import IncreaseButton from './component/IncreaseButton'
import DecreaseButton from './component/DecreaseButton';
import ResetButton from './component/ResetButton';
const App = () => {
  const [count, setCount] = useState(0);
  const handelIncrease= () =>{
   setCount((prev) => prev + 1);
  } ;
  const handelDecrease = () =>{
    setCount(prev => prev -1);
    if(count <= 0){
      setCount(0)
    };
  };
  const handelReset = () =>{
    setCount(0)
  };
  return (
    <div style={{display:"flex",gap:"10px"}} >
       <h1> {count} </h1>
      <IncreaseButton
      onIncrease = {handelIncrease}
      ></IncreaseButton>
      <DecreaseButton
      onDecrease={handelDecrease}
      ></DecreaseButton>
      <ResetButton
      onReset = {handelReset}
      ></ResetButton>
    </div>
  );
};

export default App;
