import React from "react";

function ShoutoutCard({ name, content }) {
  return (
    <div className="shoutoutCard">
      <h1>🎉 {name} 🎉</h1>
      <h2>{content}</h2>
    </div>
  );
}

export default ShoutoutCard;
