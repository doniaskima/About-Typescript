import React from 'react';
import './App.css';
// Components
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startTrivial = async () => {
    
  }
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <button className="start" onClick={startTrivial}>
        Start
      </button>
      <p className="score">Score:</p>
      <QuestionCard />
      <button className="next">

      </button>
    </div>
  );
}

export default App;
