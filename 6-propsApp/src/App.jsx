import React from 'react'
import ProductCard from './component/ProductCard';
const product = {
  id: 101,
  title: "Laptop",
  price: 45000,
};
// Display this in another component named ProductCard


const App = () => {
  return (
    <div>
      <ProductCard product = {product}
    
      
      ></ProductCard>
    </div>
  );
};

export default App;
