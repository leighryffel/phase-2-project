import React, { useState } from "react";
import Confetti from 'react-dom-confetti';

function StudentCard({ name, zodiac_sign, funFact }) {
  const [toggle, setToggle] = useState(true);
  const [confetti, setConfetti] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
    setConfetti(confetti => !confetti)
  }

  const confettiConfig = {
    angle: 90,
    spread: 50,
    startVelocity: 40,
    elementCount: 50,
    dragFriction: 0.12,
    duration: 2000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };
  
  return (
    <div className="card">
      {toggle ? (
        <div>
          <h2>
            <b>{name}</b>
          </h2>
          <h4>Zodiac Sign: {zodiac_sign}</h4>
        </div>
      ) : (
        <div>
          <h3>{name}'s Fun Fact:</h3>
          <h4>{funFact}</h4>
        </div>
      )}
      <button onClick={handleToggle}>Fun Fact!</button>
      <Confetti active={ confetti } config={ confettiConfig }/>
    </div>
  );
}

export default StudentCard;
