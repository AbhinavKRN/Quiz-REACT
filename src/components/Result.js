import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const Result = () => {
  const { score, currentQuiz, setCurrentQuiz, setScore } = useContext(QuizContext);

  const handleRetry = () => {
    setScore(0);
    setCurrentQuiz(null);
  };

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        You scored {score} out of {currentQuiz.questions.length}.
      </p>
      <button onClick={handleRetry}>Retry</button>
    </div>
  );
};

export default Result;
