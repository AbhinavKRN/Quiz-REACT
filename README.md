# Quiz App

This is a functional and interactive Quiz App built with React. The app allows users to select quizzes from different categories, answer various types of questions, and track their progress. The app also includes a dark/light theme toggle, a progress bar, and other interactive features.

## Features

### Core Features:
1. **Quiz Selection**:  
   - Users can choose a quiz from multiple categories such as General Knowledge, Math, and Science.

2. **Question Management**:  
   - Each quiz displays a set number of questions.
   - Multiple types of questions supported: 
     - Multiple choice with a single correct answer.
     - Multiple choice with multiple correct answers.
     - True/False questions.

3. **User Interface and Interaction**:  
   - Error handling for UI elements.
   - Navigation to the next question after answering the current one.
   - Final score summary displayed upon quiz completion.

### Bonus Features:
1. **Dark/Light Theme Toggle**:  
   - Users can switch between light and dark themes.

2. **Progress Bar**:  
   - A progress bar shows quiz progression.

3. **Hover and Focus States**:  
   - All interactive elements (buttons, options) have clearly defined hover and focus states.

## Screenshots

### Quiz Selection
![Quiz Selection](./screenshots/quiz-selection.png)

### Quiz in Progress
![Quiz Progress](./screenshots/quiz-progress.png)

### Quiz Summary
![Quiz Summary](./screenshots/quiz-summary.png)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AbhinavKRN/Quiz-REACT.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd quiz-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

The app should now be running on `http://localhost:3000`.

## Folder Structure

```
quiz-app/
│
├── public/                     # Static files
├── src/                        # Source files
│   ├── components/             # React components
│   │   ├── Question.js         # Individual question component
│   │   ├── Quiz.js             # Main quiz component
│   │   ├── QuizList.js         # Quiz selection component
│   │   ├── Result.js           # Quiz result summary component
│   ├── context/                # Context API for state management
│   │   └── QuizContext.js      # Quiz context and provider
│   ├── data/                   # Data for quizzes and questions
│   │   └── quizzes.js          # Quiz questions and answers
│   ├── styles/                 # CSS stylesheets
│   │   ├── App.css             # Main app styles
│   │   └── Quiz.css            # Quiz specific styles
│   ├── App.js                  # Main app component
│   └── index.js                # Entry point for React
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
```

## Usage

1. **Choose a Quiz:** Select a quiz category from the list on the home screen.

2. **Answer Questions:** For each question, select the correct answer and submit.

3. **Review Progress:** Track your progress using the progress bar at the top of the screen.

4. **Toggle Theme:** Use the theme toggle button to switch between light and dark modes.

5. **View Results:** After completing the quiz, view your final score and review your answers.

## Technologies Used

- **React** - Frontend framework
- **Context API** - State management
- **CSS** - Styling
- **JavaScript** - Logic implementation

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are always welcome!

## Contact

If you have any questions or feedback, please feel free to reach out.
