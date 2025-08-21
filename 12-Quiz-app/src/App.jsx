import React, { useState } from "react";

const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which language runs in a browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
];
//  answers = {1: "london", 2: "java" , 3: "central style sheets"}
 const App =  () => {
  const [answers, setAnswers] = useState({});
  const handelSubmitAnswer = (questionId, option) =>{
    setAnswers({...answers, [questionId] : option})
  };

  const [result, setResult] = useState(null);
  const handelResult = ()=>{
   const finalScore =  quizData.reduce((acc,item)=>{
   return   acc +(item.answer === answers[item.id] ? 1 : 0 ); 
   },0) 
 
setResult(finalScore);

 };

  return (
  <div 
  style={{
    marginLeft:"20px"
  }}>
    <h1>Quiz App</h1>    
      {quizData.map((question,index)=>(
       <div style={{
        display:"flex",
        flexDirection:"column",
        gap:"5px",
        marginBottom: "7px"
       
       }} key={question.id} >
        <h3 style={{
          marginBottom:"3px"
        }} > {index + 1}  {question.question} </h3>
        {question.options.map((option)=>(
          <label 
           key={option} >
             <input type="radio"
              value={option}
              name={`question-${question.id}`}
              onChange={()=>handelSubmitAnswer(question.id,option)}
               />
             {option}
          </label>
         
        ))}
        
        
         </div>  
        
      ))}
     <button onClick={handelResult} >Submit</button>
    { result !== null &&   <h2>SCORE : {result}</h2>
 }
  </div>
  );
};

export default App;
