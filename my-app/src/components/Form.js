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
    addShoutout(formData);
  }

  function handleMouseLeave(e){
    e.target.style.background = ""
  }

  function changeBackground(e){
    e.target.style.background = '#4cc9f0'
  }

  return (
    <div className="form" onSubmit={handleSubmit}>
      <h3>Submit A Shoutout Below:</h3>
      <form className="formItem">
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
