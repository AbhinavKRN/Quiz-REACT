import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import { quizzes } from '../data/quizzes'; 

const QuizList = () => {
  const { setCurrentQuiz } = useContext(QuizContext);

  return (
    <div>
      <h2>Select a Quiz</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <button onClick={() => setCurrentQuiz(quiz)}>{quiz.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
