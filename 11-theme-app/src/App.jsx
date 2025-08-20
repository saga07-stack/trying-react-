// import React, { useState } from "react";
// const faqs = [
//   {
//     id: 1,
//     question: "What is React?",
//     answer: "React is a JavaScript library for building user interfaces.",
//   },
//   {
//     id: 2,
//     question: "What is a component?",
//     answer: "A component is a reusable piece of UI in React.",
//   },
//   {
//     id: 3,
//     question: "What is state?",
//     answer:
//       "State is an object that determines how a component renders and behaves.",
//   },
// ];
// const App = () => {
//   const [openId, setOpenId] = useState(null);
//   const handleToggle = (id) => {
//     setOpenId(id === openId ? null : id);
//   };
//   return (
//     <div style={{ marginLeft: "20%"}} >
//       <h1>FAQ Accordion</h1>
//       <div>
//         {faqs.map((faq) => (
//           <div key={faq.id}>
//             <div style={ { backgroundColor: "silver", 
//             padding: "20px",
//              margin:"5%", 
//              cursor: "pointer",
//               fontWeight: "bold"}} onClick={() => handleToggle(faq.id)}>{faq.question}</div>
//             {faq.id === openId && <div style={{ backgroundColor: "#fafafa",

//             }} >{faq.answer}</div>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default App;


import React, { useState } from 'react'
const questions = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is a component?",
    answer: "A component is a reusable piece of UI in React.",
  },
  {
    id: 3,
    question: "What is state?",
    answer:
      "State is an object that determines how a component renders and behaves.",
  },
  {
    id: 4,
    question: "What are props?",
    answer: "Props are inputs to components that allow data to be passed from parent to child.",
  },
  {
    id: 5,
    question: "What is JSX?",
    answer: "JSX is a syntax extension that lets you write HTML inside JavaScript.",
  },
  {
    id: 6,
    question: "What is useState?",
    answer: "useState is a React Hook that lets you add state to functional components.",
  },
  {
    id: 7,
    question: "What is useEffect?",
    answer: "useEffect is a React Hook used to perform side effects like fetching data or setting up subscriptions.",
  },
  {
    id: 8,
    question: "What is the difference between functional and class components?",
    answer: "Functional components are simple functions, while class components use ES6 classes with lifecycle methods.",
  },
  {
    id: 9,
    question: "What is the virtual DOM?",
    answer: "The virtual DOM is a lightweight copy of the real DOM that React uses to optimize UI updates.",
  },
  {
    id: 10,
    question: "What are React Hooks?",
    answer: "Hooks are special functions that let you use state and lifecycle features in functional components.",
  },
  {
    id: 11,
    question: "What is React Router?",
    answer: "React Router is a library for handling navigation and routing in React applications.",
  },
  {
    id: 12,
    question: "What is lifting state up?",
    answer: "Lifting state up means moving state to a common ancestor component so it can be shared between children.",
  },
];

const  App = () => {
  const [show, setShow] = useState(null);
  const handelToggle = (id)=> {
    setShow ( id === show ? null : id )
  }
  
  return (
    <div>
    <h1> FAQ </h1>
    <div>
      {questions.map((question )=> (
          <div key={question.id} onClick={()=>handelToggle(question.id)}  >
              {question.question}
          { show === question.id && <p> {question.answer} </p> } 
          
           </div>

      ))}
    </div>

    </div>
  );
};

export default  App;