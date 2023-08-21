import FibonacciCalculator from "./FibonacciCalculator";
import ParentComponent from "./ParentComponent";
import { useState } from "react";
import "./styles.css";
import InputComponent from "./InputComponent";

export default function App() {
  const [fibonacciPosition, setFibonacciPosition] = useState(10);

  const handleValue = (e) => {
    const { value } = e.target;
    console.log(value);

    if (value === "" || parseInt(value) > 40) {
      setFibonacciPosition(parseInt(1));
    } else {
      setFibonacciPosition(parseInt(value));
    }
  };

  return (
    <div className="App">
      <ParentComponent />
      <InputComponent
        fibonacciPosition={fibonacciPosition}
        handleValue={handleValue}
      />
      <FibonacciCalculator n={fibonacciPosition} />
    </div>
  );
}
