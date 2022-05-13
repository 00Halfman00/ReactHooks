// useState hook example with Counter
import React, { useState } from 'react';

const Counter_useState = () => {
  const [counter, setCounter] = useState(0); // create a state variable(first element) initiated as 0, second element is function to change state

  return (
    <div className="counter-div">
      <h4>Counter_useState</h4>
      {counter}
      <br></br>
      <div className="counter-button-div">
        <button
          className="inc-button"
          onClick={() => setCounter((prevC) => prevC - 1)}
        >
          decrement
        </button>
        <button
          className="inc-button"
          onClick={() => setCounter((prevC) => prevC + 1)}
        >
          increment
        </button>
      </div>
      <br></br>
    </div>
  );
};

export default Counter_useState;
