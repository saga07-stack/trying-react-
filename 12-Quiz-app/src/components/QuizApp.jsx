import React, { useState } from 'react'
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
const  QuizApp = () => {
  const [answers, setAnswers]= useState({});
  const handelChange = (id, option)=>{
    setAnswers({...answers, [id]: option });
  };
  console.log(answers);
  // answers =   {1:"Rome",2:"javaScript",3:"css"}
  const [result, setResult] = useState(null);
  const handelResult = ()=>{
    const finalScore = quizData.reduce((acc,item)=>{
    return acc + (item.answer === answers[item.id] ? 1: 0  )
    },0 )
  setResult(finalScore);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {quizData.map((question)=>(
        <div 
        key={question.id}
        >
        <h3> {question.question} 

        </h3>
        {question.options.map((option)=>(
          <label
          
            style={{
              display:"block"
            }}
          key={option.id} >
            <input
           
             type="radio" 
            value={option}
            name={`question-${question.id}`} // name: question-1
            onChange={()=>handelChange(question.id,option)}
            />
            {option}
          </label>
        ))}
        </div>

      ))}
      <button onClick={handelResult} > Submit </button>
      <h3> {result} </h3>
      
    </div>
  )
}

export default  QuizApp