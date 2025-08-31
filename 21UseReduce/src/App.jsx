// import React, { useReducer } from 'react'

// const  App = () => {
//   const reducer = (state, action ) =>{
//     switch (action.type){
//       case "INCREMENT":
//         return state + 1;
//         case "DECREMENT":
//           return state - 1;
//           case "RESET":
//             return 0;
//             default:
//               return state;

//     }
//   }
//   const [count, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h2>{count}</h2>
//       <button onClick={()=>dispatch({type: "INCREMENT"})} >Add</button>
//       <button onClick={()=> dispatch({type: "DECREMENT"}) } >Minus</button>
//       <button onClick={()=>dispatch({type: "RESET" })} >Reset</button>
      
//     </div>
//   )
// }

// export default  App





















import React, { useReducer } from 'react'

const  App = () => {
  const fineReducer = (fine, )=>{

  }
  const [fine , dispatch] = useReducer(fineReducer,0);
  return (
    <div>
      <h1>Fine COunter</h1>

    </div>
  )
}

export default  App