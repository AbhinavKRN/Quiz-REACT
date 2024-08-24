import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    onAnswer(selectedOption);
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="option"
                value={index}
                onChange={() => setSelectedOption(index)}
                checked={selectedOption === index}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={selectedOption === null}>
        Submit Answer
      </button>
    </div>
  );
};

export default Question;
