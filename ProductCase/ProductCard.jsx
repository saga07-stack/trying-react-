import ProductImage from "./ProductImage";
import BuyButton from "./BuyButton";
import ProductInfo from "./ProductInfo";
import React from 'react'

const ProductCard = () => {
  return (
    <div>
      <ProductImage/>;
      <ProductInfo/>;
      <BuyButton/>;
    </div>
  );
};

export default ProductCard;

