// import React, { useContext } from 'react'
// import { UserContext } from '../App'

// const  Child = () => {
// const user1 = useContext(UserContext);
//   return (
//     <div>
//         <h1> {user1} </h1>
//     </div>
//   )
// }

// export default  Child

import React, { useContext } from 'react'
import { ItemContext } from '../App'

const  Child = () => {
    const {item , model }  = useContext(ItemContext)
  return (
    <div>
        <h1>This is {item} and model  {model} </h1>
    </div>
  );
};

export default  Child; 