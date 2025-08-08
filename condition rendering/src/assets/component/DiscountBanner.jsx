import React from 'react'

const DiscountBanner = ({hasDiscount}) => {
    if(hasDiscount !== true) return null;
  return (
    <div>
      <h1>Limited Time Offer!</h1>
    </div>
  );
};

export default DiscountBanner;
