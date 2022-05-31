import React, { useState } from 'react'

function StudentCard({name, age, pronouns }) {

  function handleClick() {
    console.log("I was clicked!")
  }

  return (
    <div className="card">
      <div className="container">
        <h2><b>{name}</b></h2>
        <p>Age: {age}</p>
        <button onClick={handleClick}>Fun Fact!</button>
      </div>
    </div>
  )
}

export default StudentCard