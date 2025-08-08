import React from 'react'

const ProductCard = ({isInStock}) => {
    if(isInStock !== 0) return <button>Buy Now</button>
  return (
    <div>
      <h1>Out of stock </h1>
    </div>
  );
};

export default ProductCard;
