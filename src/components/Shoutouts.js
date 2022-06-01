import React, { useState } from "react";
import Form from "./Form";
import ShoutoutCard from "./ShoutoutCard";

function Shoutouts() {
  const [shoutouts, setShoutouts] = useState([
    {
      name: "Our cohort",
      content: "We rock!",
    },
  ]);

  function addShoutout(newData) {
    setShoutouts([...shoutouts, newData]);
  }

  const shoutoutList = shoutouts.map((shoutout) => {
    return <ShoutoutCard name={shoutout.name} content={shoutout.content} />;
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
