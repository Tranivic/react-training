import { Component } from "react";
import PropTypes from "prop-types";
import "./Card.css";

class Card extends Component {
  render() {
    const { randomNumber } = this.props;

    return (
      <>
        <h1 className="card-component">The random number is: {randomNumber}</h1>
      </>
    );
  }
}

Card.propTypes = {
  randomNumber: PropTypes.number.isRequired,
};

export default Card;
