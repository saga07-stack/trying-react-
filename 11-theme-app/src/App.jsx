import React, { useState } from "react";
const faqs = [
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
];
const App = () => {
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId(id === openId ? null : id);
  };
  return (
    <div style={{ marginLeft: "20%"}} >
      <h1>FAQ Accordion</h1>
      <div>
        {faqs.map((faq) => (
          <div key={faq.id}>
            <div style={ { backgroundColor: "silver", 
            padding: "20px",
             margin:"5%", 
             cursor: "pointer",
              fontWeight: "bold"}} onClick={() => handleToggle(faq.id)}>{faq.question}</div>
            {faq.id === openId && <div style={{ backgroundColor: "#fafafa",

            }} >{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;