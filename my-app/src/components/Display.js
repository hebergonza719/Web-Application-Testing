import React from 'react';

const Display = ({ strikeCount, ballCount }) => {
  return (
    <section>
      <h1>At Bat</h1>
      <h2 className="balls" data-testid="balls-h2">Balls: {ballCount}</h2>
      <h2 className="strikes">Strikes: {strikeCount}</h2>
    </section>
  )
};

export default Display;