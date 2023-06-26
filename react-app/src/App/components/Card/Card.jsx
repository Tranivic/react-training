import { Component } from "react";
import { PropTypes } from "prop-types";
import "./Card.css";
import Item from "../Item/Item.jsx";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      itemName: "Pastel",
    };

    this.handleClick = this.handleClick.bind(this);
    this.getCounterDouble = this.getCounterDouble.bind(this);
  }

  // Hooks
  componentDidMount() {
    console.log("Componente montou");
  }

  // Methods
  handleClick() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
    this.setState({
      itemName: "Pastel De Carne",
    });
  }

  // Computed
  getCounterDouble() {
    return this.state.counter * 2;
  }

  render() {
    return (
      <div className="card-component">
        <h1>The random number is: {this.props.randomNumber}</h1>
        <p>Counter: {this.state.counter}</p>
        <p>Counter double: {this.getCounterDouble()}</p>
        <button onClick={this.handleClick}>Aperte aqui</button>
        <Item>{this.state.itemName}</Item>
      </div>
    );
  }
}

Card.propTypes = {
  randomNumber: PropTypes.number,
};

export default Card;
