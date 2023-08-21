const ChildComponent = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} name="increment">
        Increment
      </button>
      <button onClick={handleClick} name="decrement">
        Decrement
      </button>
    </div>
  );
};

export default ChildComponent;
