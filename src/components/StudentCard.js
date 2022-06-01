import React, { useState } from "react";

function StudentCard({ name, zodiac_sign, funFact }) {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="card">
      {toggle ? (
        <div >
          <h2>
            <b>{name}</b>
          </h2>
          <h3>Sign: {zodiac_sign}</h3>
        </div>
      ) : (
        <div >
          <h4>
            {name}'s Fun Fact: {funFact}
          </h4>
        </div>
      )}
      <button className="studentButton" onClick={handleToggle}>Fun Fact!!</button>
    </div>
  );
}

export default StudentCard;
