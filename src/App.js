
import React, { useContext } from 'react';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';
import { QuizContext, QuizProvider } from './context/QuizContext';
import './styles/App.css';

const App = () => {
  const { currentQuiz, theme, toggleTheme } = useContext(QuizContext);

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Quiz App</h1>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        </button>
      </header>
      <main>{currentQuiz ? <Quiz /> : <QuizList />}</main>
    </div>
  );
};

export default () => (
  <QuizProvider>
    <App />
  </QuizProvider>
);
