import React from 'react'
import StudentCard from "./StudentCard";

function StudentContainer() {
  return (
    <div>
    <h2>STUDENT LIST</h2>
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </div>
  )
}

export default StudentContainer