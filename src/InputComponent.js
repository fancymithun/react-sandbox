const InputComponent = ({ fibonacciPosition, handleValue }) => {
  return (
    <div>
      <input type="number" onChange={handleValue} />
    </div>
  );
};

export default InputComponent;
