import "./styles.css";
import { useState, useRef, useEffect } from "react";
import CostomInput from "./CostomInput";

export default function App() {
  const [name, setName] = useState("");

  //first use case
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  //second use case
  const inputRef = useRef();

  const clickHandler = () => {
    const value = inputRef.current.value;
    if (!value) inputRef.current.focus();
    else alert(value);
  };

  return (
    <div className="App">
      <CostomInput
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={clickHandler}>Submit</button>
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </div>
  );
}
