import { Component } from "react";
import Card from "./components/Card/Card";
import FunctionBased from "./components/FunctionBased/FunctionBased";

class App extends Component {
  render() {
    const sum = (a, b) => {
      return a + b;
    };

    const numbers = Array.from({ length: 2 }, () =>
      parseInt(Math.random() * 1000000000000000)
    );

    return (
      <>
        <header>
          <h1>First React App - Test</h1>
          <p>{sum(5, 5)}</p>
        </header>
        <main>
          {numbers.map((randomNumber) => (
            <div key={randomNumber}>
              <Card randomNumber={randomNumber} />
            </div>
          ))}
          <FunctionBased />
        </main>
      </>
    );
  }
}

export default App;
