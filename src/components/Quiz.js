
import React, { useContext, useState } from 'react';
import { QuizContext } from '../context/QuizContext';
import Question from './Question';
import Result from './Result';
import '../styles/Quiz.css';

const Quiz = () => {
  const { currentQuiz, setScore } = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOptions) => {
    const correctAnswers = currentQuiz.questions[currentQuestionIndex].correctAnswer;
  
    if (!Array.isArray(selectedOptions)) {
      selectedOptions = [selectedOptions];
    }
  
    if (
      selectedOptions.sort().toString() === correctAnswers.sort().toString()
    ) {
      setScore((prevScore) => prevScore + 1);
    }
  
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };
  

  if (!currentQuiz) {
    return <p>Please select a quiz first.</p>;
  }

  if (showResult) {
    return <Result />;
  }

  return (
    <div>
      <h2>{currentQuiz.name}</h2>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%`,
          }}
        />
      </div>
      <Question
        question={currentQuiz.questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
