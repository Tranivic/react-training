import "./Item.css";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <div className="item-component">
      <h1>{props.children}</h1>
    </div>
  );
}
Item.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Item;
