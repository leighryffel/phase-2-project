import React, { useState, useEffect } from "react";
import Form from "./Form";
import ShoutoutCard from "./ShoutoutCard";

function Shoutouts() {
  const [shoutouts, setShoutouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoutouts")
      .then((res) => res.json())
      .then((data) => setShoutouts(data));
  }, []);

  function addShoutout(newData) {
    if (newData.name !== "" && newData.content !== "") {
      return setShoutouts([...shoutouts, newData]);
    }
  }

  const shoutoutList = shoutouts.map((shoutout) => {
    return (
      <ShoutoutCard
        key={shoutout.id}
        name={shoutout.name}
        content={shoutout.content}
      />
    );
  });

  return (
    <div className="shoutout">
      <h1>Shoutout to...</h1>
      {shoutoutList}
      <Form addShoutout={addShoutout} />
    </div>
  );
}

export default Shoutouts;
