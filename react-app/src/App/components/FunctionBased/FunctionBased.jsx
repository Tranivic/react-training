import { useState, useRef } from "react";

function FunctionBased() {
  const [stateBased, setStateBased] = useState({
    content: "This is the useState",
  });
  const refBased = useRef("This is the useRef");

  const handleClick = (type) => {
    if (type === "state") {
      setStateBased({ content: "State updated" });
    }
    if (type === "ref") {
      refBased.current = "Ref updated";
    }
  };

  return (
    <>
      <h1>UseState: {stateBased.content}</h1>
      <h1>UseRef: {refBased.current}</h1>
      <button onClick={() => handleClick("state")}>Change State</button>
      <button onClick={() => handleClick("ref")}>Change Ref</button>
    </>
  );
}

export default FunctionBased;
