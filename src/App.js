import React, { useState } from 'react';
import './App.css'

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: "Mars"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci"
  }
];


function App() {
  const [status , setStatus] = useState(false); 
  const [queNum , setQueNmu] = useState(0); 
  const [score , setScore] = useState(0); 
  const [userAnswers , setUserAnswer] = useState(Array(questions.length).fill(""));

  function nextQuestion(userAnswer){
    if(userAnswer === questions[queNum].answer){
      setScore(score + 1);
    }

    setUserAnswer(preValue =>{
      const updateAnswer = [...userAnswers];
      updateAnswer[queNum] = userAnswer;
      return updateAnswer;

    })

    if(queNum < questions.length -1){
      setQueNmu(queNum + 1);
    }else{
      setStatus(true);
    }
  }

  function tryAgain(){
    setQueNmu(0);
    setStatus(false);
    setScore(0)
  }
  
  return (
   <div className='flex'>
   {
    status ? (
      <div>
        <h2>Your Score is : {score}</h2>
        
        <table>
          <thead>
            <tr>
              <th>Correct Answer </th>
              <th>Your Answer  </th>
            </tr>
          </thead>
          <tbody>
            {
              questions.map((com , ind) => (
                <tr key={ind}>
                  <td>{com.answer}</td>
                  <td>{userAnswers[ind]}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <button onClick={tryAgain}>Try Again</button>
      </div>
    ) : (
      <div>
        <h2>Question No is : {queNum + 1}</h2>
        <h3> {questions[queNum].question}</h3>
        <div className='btn'>
          {
            questions[queNum].options.map(option =>(
              <button key={option} onClick={()=>nextQuestion(option)}>{option}</button>
            ))
          }
        </div>
      </div>
    )
   }

   </div>
  );
}

export default App;
