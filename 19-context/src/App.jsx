// import React, { createContext, useState } from 'react'
// import Parent from './components/Parent'
// const UserContext = createContext();
// const  App = () => {
//   const [user, setUser]= useState("sagar");
//   return (
//     <div>
//       <h1> without context Api</h1>
//       <UserContext.Provider 
//       value={user} >
//      <Parent />
//       </UserContext.Provider>
//     </div>
//   );
// };

// export default  App;
// export {UserContext};


import React, { createContext, useState } from 'react'
const ItemContext = createContext()
import Parent from './components/Parent';
const model = "dell";
const  App = () => {
  const [item, setItem] = useState("laptop")
  return (
    <div>
    <ItemContext.Provider 
    value= {{item , model}}>
<Parent/>
      
    </ItemContext.Provider>
    </div>
  );
};

export default  App;
export {ItemContext}