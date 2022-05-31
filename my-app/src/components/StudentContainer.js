import React from "react";
import StudentCard from "./StudentCard";

function StudentContainer({ cards }) {
  const studentList = cards.map((card) => (
    <StudentCard
      key={card.name}
      name={card.name}
      age={card.age}
      pronouns={card.pronouns}
    />
  ));

  return <div className="container">{studentList}</div>;
}

export default StudentContainer;
