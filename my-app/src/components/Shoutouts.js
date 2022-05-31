import React, { useState } from "react";
import Form from "./Form"

function Shoutouts() {
  const [shoutout, setShoutout] = useState({
    name: "Leigh",
    shoutout: "She rocks!"
  });

  function addShoutout(newData){
    setShoutout(newData)
  }

  return (
    <div className="shoutout">
      <h4><b>Shoutout to...</b></h4>
      <div className="shoutoutCard">
        <h4><b>{shoutout.name}</b></h4>
        <p>{shoutout.shoutout}</p>
      </div>
        <Form addShoutout={addShoutout}/>
    </div>
  );
}

export default Shoutouts;
