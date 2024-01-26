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
