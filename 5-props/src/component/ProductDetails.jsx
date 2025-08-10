import React from 'react'

const ProductDetails = (props) => {
  return (
    <div>
      
      <h1> {props.ProductName}  </h1>
    <h1>{props.price}</h1>
    {props.inStock ? <button>Buy Now</button> : <h1>Out of stock</h1>}

    </div>
  );
}

export default ProductDetails
