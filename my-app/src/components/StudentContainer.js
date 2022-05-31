import React from 'react'
import StudentCard from "./StudentCard";

function StudentContainer({ cards }) {
  const studentList = cards.map((card) => (
    <StudentCard key={card.id} name={card.name} age={card.age} cards={cards}/>
  ))

  return (
    <div className="container">
      {studentList}
    </div>
  )
}

export default StudentContainer