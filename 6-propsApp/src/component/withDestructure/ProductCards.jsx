import React from 'react'

const ProductCards = ({product}) => {
    const {id, title, price} = product;
  return (
    <div>
      <h3> {id} {title} {price} </h3>
    </div>
  );
};

export default ProductCards;
