import React, { useState, useContext } from 'react';
import {userContext} from './index.jsx';

const Counter = () => {
  const [counter, setCounter] = useState(0); // create a state variable(first element) initiated as 0, second element is function to change state
  const {user} = useContext(userContext);
  return (
    <div className="counter-div">
      <h3>Counter</h3>
      <h4>Counter_useState_useContext</h4>
      <span>user: {user}</span>
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

export default Counter;
