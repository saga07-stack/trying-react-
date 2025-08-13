import React from 'react'
const ProductCard = (props) => {
  const {firstName, lastName, email } = props.user;
  return (
    <div>
      <h1>
     Name : {firstName} {lastName}
     Email : {email}


      </h1>
    </div>
  );
};

export default ProductCard;
