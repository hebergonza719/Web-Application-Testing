import React from "react";

const Dashboard = ({ ballCount, setBallCount, setStrikeCount, strikeCount }) => {

  const foulButton = () => {
    if (strikeCount < 2) {
      setStrikeCount(strikeCount + 1);
    }
  };

  const strikeButton = () => {
    if (strikeCount < 3) {
      setStrikeCount(strikeCount + 1);
    }
  };

  const ballButton = () => {
    if (ballCount < 4) {
      setBallCount(ballCount + 1);
    }
  };

  const hitButton = () => {
    setStrikeCount(0);
    setBallCount(0);
  };

  return (
    <section>
      <button onClick={ strikeButton }>Strike</button>
      <button onClick={ ballButton }>Ball</button>
      <button onClick={ foulButton }>Foul</button>
      <button onClick={ hitButton }>Hit</button>
    </section>
  )
};

export default Dashboard;