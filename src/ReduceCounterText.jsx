import React, { useReducer } from 'react';
let str = '';
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        text: state.text,
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        text: state.text,
      };
    case 'ADDTEXT':
      const obj = {
        counter: state.counter,
        text: state.text + str,
      };
      str = '';
      return obj;
    default:
      return state;
  }
};

const ReduceCounterText = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0, text: '' });
  const changeText = function (event) {
    str += event.target.value;
    event.target.value = '';
    dispatch({ type: 'ADDTEXT' });
  };

  return (
    <div className="reduce-div">
      <div className="reduce-button-div">
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          Decrement
        </button>
      </div>
      <br></br>
      {state.counter}
      <br></br>
      <br></br>
      <div className="reduce-text-div">
        <input onChange={changeText} />
        <br></br>
        {state.text}
        <br></br>
      </div>
    </div>
  );
};

export default ReduceCounterText;
