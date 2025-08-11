import React from 'react'

const ProductDetials = (props) => {
  return (
    <div>
      <h1> {props.productName} it cost {props.cost}.{props.inStock ? <button>Buy Now</button> : "Out of Stock" } </h1>
    </div>
  );
};

export default ProductDetials;
