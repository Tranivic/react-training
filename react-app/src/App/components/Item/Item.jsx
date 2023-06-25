import "./Item.css";

function Item(children) {
  return (
    <div className="item-component">
      <h1>{children.children}</h1>
    </div>
  );
}

export default Item;
