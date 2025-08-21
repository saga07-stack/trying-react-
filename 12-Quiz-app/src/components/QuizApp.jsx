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

export default function QuizApp() {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (qId, option) => {
    setUserAnswers({ ...userAnswers, [qId]: option });
  };

  const handleSubmit = () => {
  const calculatedScore = quizData.reduce((score, q) => {
    return score + (userAnswers[q.id] === q.answer ? 1 : 0);
  }, 0);

  setScore(calculatedScore);
};

  return (
    <div style={{ maxWidth: 600, margin: "50px auto", textAlign: "left" }}>
      <h1 style={{ textAlign: "center" }}>Quiz App</h1>
      {quizData.map((q, index) => (
        <div key={q.id} style={{ marginBottom: 30 }}>
          <h3>
            {index + 1}. {q.question}
          </h3>
          {q.options.map((option) => (
            <label key={option} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                name={`question-${q.id}`}
                value={option}
                checked={userAnswers[q.id] === option}
                onChange={() => handleChange(q.id, option)}
                style={{ marginRight: 10 }}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Submit Quiz
        </button>
        {score !== null && (
          <h2 style={{ marginTop: 20 }}>
            Your Score: {score}/{quizData.length}
          </h2>
        )}
      </div>
    </div>
  );
}
