import { useState, useRef } from "react";

function FunctionBased() {
  const [data, setData] = useState({
    content: "This is the useState",
    duplicateInput: "",
  });
  const refBased = useRef("This is the useRef");

  const handleClick = (type) => {
    if (type === "state") {
      setData({ content: "State updated" });
    }
    if (type === "ref") {
      refBased.current = "Ref updated";
    }
  };

  const duplicateInput = (recivedEvent) => {
    const newValue = recivedEvent.nativeEvent.data;
    const lastValue = data.duplicateInput;

    if (newValue !== null) {
      setData((prevState) => ({
        ...prevState,
        duplicateInput: lastValue + newValue,
      }));
    }
    console.log(recivedEvent);
  };

  return (
    <>
      <h1>UseState: {data.content}</h1>
      <h1>UseRef: {refBased.current}</h1>
      <button onClick={() => handleClick("state")}>Change State</button>
      <button onClick={() => handleClick("ref")}>Change Ref</button>
      <input onInput={(event) => duplicateInput(event)} type="text" />
      <p className="input-text">{data.duplicateInput}</p>
    </>
  );
}

export default FunctionBased;
