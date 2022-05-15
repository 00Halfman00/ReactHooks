import React, {
  useState,
  forwardRef,
  useContext,
  useImperativeHandle,
} from 'react';
import { userContext } from './index.jsx';

const CounterJr = forwardRef((props, ref) => {
  const { user } = useContext(userContext);
  const [counter, setCounter] = useState(0);

  useImperativeHandle(ref, () => ({
    increase: () => {
      setCounter((prevV) => prevV + 1);
    },
    decrease: () => {
      setCounter((prevV) => prevV - 1);
    },
  }));

  return (
    <div className="counterJr-div">
      <h3>CounterJr</h3>
      <h4>useState_UseImperativeHandle</h4>
      <h4>useContext_forwardRef</h4>
      <p>user: {user}</p>
      {counter}
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
    </div>
  );
});

export default CounterJr;
