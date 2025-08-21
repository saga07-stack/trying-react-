
import React, { useState } from 'react'
const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 25.99, code: "ELEC101" },
  { id: 2, name: "Mechanical Keyboard", category: "Electronics", price: 79.99, code: "ELEC102" },
  { id: 3, name: "Bluetooth Speaker", category: "Electronics", price: 49.50, code: "ELEC103" },
  { id: 4, name: "Gaming Monitor", category: "Electronics", price: 199.99, code: "ELEC104" },
  { id: 5, name: "Laptop Stand", category: "Accessories", price: 19.99, code: "ACC201" },
  { id: 6, name: "USB-C Hub", category: "Accessories", price: 29.99, code: "ACC202" },
  { id: 7, name: "Portable SSD", category: "Storage", price: 89.99, code: "STO301" },
  { id: 8, name: "External Hard Drive", category: "Storage", price: 69.99, code: "STO302" },
  { id: 9, name: "Smartphone Case", category: "Accessories", price: 14.99, code: "ACC203" },
  { id: 10, name: "Wireless Earbuds", category: "Electronics", price: 59.99, code: "ELEC105" },
  { id: 11, name: "Fitness Tracker", category: "Wearables", price: 99.99, code: "WEAR401" },
  { id: 12, name: "Smartwatch", category: "Wearables", price: 149.99, code: "WEAR402" },
  { id: 13, name: "Desk Lamp", category: "Home", price: 24.99, code: "HOME501" },
  { id: 14, name: "Office Chair", category: "Furniture", price: 129.99, code: "FURN601" },
  { id: 15, name: "Water Bottle", category: "Lifestyle", price: 9.99, code: "LIFE701" },
  { id: 16, name: "Notebook", category: "Stationery", price: 3.99, code: "STAT801" },
  { id: 17, name: "Ballpoint Pen Set", category: "Stationery", price: 5.99, code: "STAT802" },
  { id: 18, name: "Backpack", category: "Lifestyle", price: 39.99, code: "LIFE702" },
  { id: 19, name: "Digital Camera", category: "Electronics", price: 249.99, code: "ELEC106" },
  { id: 20, name: "Tripod Stand", category: "Accessories", price: 34.99, code: "ACC204" }
];
 const App = () => {
  const [searchProduct, setSearchProduct]= useState("");
  const handelChange = (e) =>{
    setSearchProduct(e.value.app)
  };
  const [resultProduct, setResultProduct] = useState("");
const[finalResult, setFinalResult] = useState

   


  return (
    <div>
      <h1>Search App</h1>
      <input type="text"
      placeholder='Search'
      onChange={handelChange} />
      <button onClick={handelSearch}  >Search</button>
      <h1> {products.filter ((product)=>(
       setResultProduct( product.name === searchProduct)
      )) 
      } </h1>

    </div>
  );

 };
export default  App