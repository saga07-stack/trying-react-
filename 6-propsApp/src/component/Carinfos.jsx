import React from 'react'

const Carinfos = (props) => {
  const {brand,model,year} = props.car;
  return (
    <div>
      <h1> this is {brand} {model} {year} </h1>
    </div>
  );
};


export default Carinfos;
