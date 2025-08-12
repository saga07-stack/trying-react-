import React from 'react'

const ProductDetail = ({productName,price,inStock}) => {
  return (
    <div>
      <h1> {productName} costs ${price}. In stock: {inStock ? <button>Buy Now</button>: <h1>Out of Stock</h1>} </h1>
    </div>
  );
};

export default ProductDetail;
