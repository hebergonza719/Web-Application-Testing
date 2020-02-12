import React, { useState, useEffect } from 'react';
import './App.css';
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  
  const [ballCount, setBallCount] = useState(0);

  const [strikeCount, setStrikeCount] = useState(0);

  if (strikeCount > 2 || ballCount > 3) {
    setStrikeCount(0);
    setBallCount(0);
  };

  return (
    <div className="App">
      <Display 
        strikeCount={strikeCount} 
        ballCount={ballCount} 
      />
      <Dashboard 
        setStrikeCount={setStrikeCount}
        strikeCount={strikeCount}
        ballCount={ballCount}
        setBallCount={setBallCount}
      />
    </div>
  );
}

export default App;
