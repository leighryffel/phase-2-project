import React from 'react'

function StudentCard({name, age}) {
  return (
    <div className="card">
      <div className="container">
        <h4><b>{name}</b></h4>
        <p>{age}</p>
      </div>
    </div>
  )
}

export default StudentCard