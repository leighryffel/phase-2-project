import React, { useState } from "react";

function Form({ addShoutout }) {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:3000/shoutouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newData) => addShoutout(newData));
  }

  function handleMouseLeave(e) {
    e.target.style.background = "";
  }

  function changeBackground(e) {
    e.target.style.background = "#4cc9f0";
  }

  return (
    <div className="form">
      <h3>Submit A Shoutout Below:</h3>
      <form className="formItem" onSubmit={handleSubmit}>
        <label>Classmate's Name: </label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onMouseOver={changeBackground}
          onMouseOut={handleMouseLeave}
          onChange={handleChange}
          style={{ margin: 15, padding: 12 }}
        />
        <label>Shoutout: </label>
        <input
          type="text"
          placeholder="Why are they great?"
          name="content"
          onMouseOver={changeBackground}
          onMouseOut={handleMouseLeave}
          onChange={handleChange}
          style={{ margin: 15, padding: 12 }}
        />
        <button className="button" type="submit" style={{ padding: 12 }}>
          Submit!
        </button>
      </form>
    </div>
  );
}

export default Form;
