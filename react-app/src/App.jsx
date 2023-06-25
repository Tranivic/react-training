import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
function App() {
  const [text] = useState("Ola mundo!");

  const [technology, setTechnology] = useState({
    name: "",
    info: "",
  });

  const data = [
    { name: "React", info: "Info sobre React" },
    { name: "Vite", info: "Info sobre Vite" },
  ];

  const handleClick = (tech) => {
    const techObj = data.find((object) => object.name === tech);
    if (techObj) {
      setTechnology(techObj);
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <div className="btn-container">
        <button onClick={() => handleClick("Vite")}>Vite</button>
        <button onClick={() => handleClick("React")}>React</button>
      </div>
      <div className="information-container">
        <h2>{technology.name}</h2>
        <p>{technology.info}</p>
      </div>
      <Card />
    </>
  );
}

export default App;
