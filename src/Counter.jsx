// useState hook example with Counter
import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0); // create a state variable(first element) initiated as 0, second element is function to change state

  return (
    <div className="counter-div">
      {counter}
      <br></br>
      <br></br>
      <button className="inc-button" onClick={() => setCounter(counter + 1)}>
        increment
      </button>
      <br></br>
    </div>
  );
};

export default Counter;
