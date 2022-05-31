import react, {useState, useEffect} from "react";
import Form from "./Form";
import Header from "./Header";
import NavBar from "./NavBar";
import Search from "./Search"
import Shoutouts from "./Shoutouts";
import StudentContainer from "./StudentContainer";

function App() {
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Shoutouts />
      <Search />
      <StudentContainer cards={cards}/>
      <Form />
    </div>
  );
}

export default App;
