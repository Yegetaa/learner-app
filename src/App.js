import './App.css';
import { learnerData } from "./data/learnerData.js";
import { useState } from "react";
import { Learner } from './components/Learner.js';
import { Score } from './components/Score.js';

function App() {
  const [learners, setLearners] = useState(learnerData);
  
  return (
    <div className="App">
      <h1>Learner App</h1> 
      <form>
        <label> Full Name:
        <input type="text"
          placeholder="Enter learner's name"></input>
        </label>
        <label> Bio:
        <input type="text"
          placeholder="Enter learner's bio"></input>
        </label>
        <label> Scores:
        <input type="text"
          placeholder="Enter learner's scores"></input>
        </label>
      </form>
        <button> Submit New Learner</button>
      {learners.map((learner) => (
        <div>
          <Learner name={learner.name} bio={learner.bio} />
          {learner.scores.map((score) => (
            <Score date={score.date} score={score.score} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
