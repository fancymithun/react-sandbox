import { useMemo } from "react";

const FibonacciCalculator = ({ n }) => {
  const calculateFibonacci = (num) => {
    if (num <= 1) return num;
    return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
  };

  const fibonacciNumber = useMemo(() => calculateFibonacci(n), [n]);

  return (
    <div>
      <p>
        Fibonacci number at position {n} : {fibonacciNumber}
      </p>
    </div>
  );
};

export default FibonacciCalculator;
