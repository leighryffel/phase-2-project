import React, { useState, useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Shoutouts from "./Shoutouts";
import Search from "./Search";
import StudentContainer from "./StudentContainer";

function App() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const filteredCards = cards.filter((card) => (
    card.name.toLowerCase().includes(search.toLowerCase())
  ))
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Shoutouts />
      <Search search={search} setSearch={setSearch}/>
      <StudentContainer cards={filteredCards} />
    </div>
  );
}

export default App;
