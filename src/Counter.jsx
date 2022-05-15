import React, { useState, useContext, useRef } from 'react';
import { userContext } from './index.jsx';
import CounterJr from './CounterJr.jsx';

const Counter = () => {
  const [count, setCount] = useState(0); // create a state variable(first element) initiated as 0, second element is function to change state
  const { user } = useContext(userContext);
  const buttonRef = useRef(null);
  const increment = () => {
    buttonRef.current.increase();
    setCount((prevV) => prevV + 1);
  };
  const decrement = () => {
    buttonRef.current.decrease();
    setCount(count - 1);
  };

  return (
    <div className="counter-div">
      <h3>Counter</h3>
      <h4>useState_useContext_useRef</h4>
      <span>user: {user}</span>
      {count}
      <br></br>
      <div className="counter-button-div">
        <button className="inc-button" onClick={decrement}>
          decrement
        </button>
        <button className="inc-button" onClick={increment}>
          increment
        </button>
      </div>
      <br></br>
      <CounterJr ref={buttonRef} />
    </div>
  );
};

export default Counter;
