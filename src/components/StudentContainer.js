import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import Search from "./Search";

function StudentContainer() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/yearbook")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

  const studentList = filteredCards.map((card) => (
    <StudentCard
      key={card.name}
      name={card.name}
      zodiac_sign={card.zodiac_sign}
      funFact={card.fun_fact}
    />
  ));

  return (
    <div className="container">
      <Search search={search} setSearch={setSearch} />
      {studentList}
    </div>
  );
}

export default StudentContainer;
