import React from 'react'


const ProductCard = (props) => {
    const {id,title,price} = props.product;
  return (
    <div>
      <h1> {id} </h1>
      <h2> {title} </h2>
      <h3> {price} </h3>
    </div>
  );
};

export default ProductCard;
