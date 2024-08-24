import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuiz,
        setCurrentQuiz,
        score,
        setScore,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
