import React from 'react'

const  Increase = ({handelAdd}) => {
  return (
    <div>
         <button onClick={handelAdd} >Add</button>
    </div>
  );
};

export default  Increase;