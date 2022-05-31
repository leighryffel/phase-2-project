import React, { useState } from 'react'

function StudentCard({name, age, pronouns }) {

  function handleClick() {
    console.log("I was clicked!")
  }

  return (
    <div className="card">
      <div className="container">
        <h4><b>Name: {name}</b></h4>
        <p>Age: {age}</p>
        <p>Pronouns: {pronouns}</p>
        <button onClick={handleClick}>Fun Fact!</button>
      </div>
    </div>
  )
}

export default StudentCard