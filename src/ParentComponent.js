import ChildComponent from "./ChildComponent";
import { useCallback, useState } from "react";

const ParentComponent = () => {
  let [count, setCount] = useState(0);

  const handleCount = useCallback(
    (event) => {
      const { name } = event.target;

      if (name === "increment") {
        setCount(count + 1);
      } else {
        setCount(count - 1);
      }
    },
    [count]
  );
  return (
    <div>
      <p>{count}</p>
      <ChildComponent handleClick={handleCount} />
    </div>
  );
};

export default ParentComponent;
