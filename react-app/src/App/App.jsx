import { Component } from "react";
import Card from "../components/Card";

class App extends Component {
  render() {
    const sum = (a, b) => {
      return a + b;
    };

    const numbers = Array.from({ length: 100 }, () =>
      parseInt(Math.random() * 1000000000)
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
        </main>
      </>
    );
  }
}

export default App;
