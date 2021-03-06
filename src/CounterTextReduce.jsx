import React, { useReducer, useEffect, useContext } from 'react';
import {userContext} from './index.jsx';

let str = '';
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        counter: state.counter + 1,
        num: state.num,
        text: state.text,
        flag: true,
      };
    case 'DECREMENT_COUNTER':
      return {
        counter: state.counter - 1,
        num: state.num,
        text: state.text,
        flag: false,
      };
    case 'INCREASE_NUM':
      return {
        counter: state.counter,
        num: state.num + 10,
        text: state.text,
        flag: state.flag,
      };
    case 'DECREASE_NUM':
      return {
        counter: state.counter,
        num: state.num - 10,
        text: state.text,
        flag: state.flag,
      };
    case 'ADD_TEXT':
      const obj = {
        counter: state.counter,
        num: state.num,
        text: str,
        flag: state.flag,
      };
      str = '';
      return obj;
    case 'ERASE_TEXT':
      return {
        counter: state.counter,
        num: state.num,
        text: '',
        flag: state.flag,
      };
    default:
      return state;
  }
};

const CounterTextReduce = () => {
  const {user} = useContext(userContext);
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    num: 0,
    text: '',
    flag: 'white',
  });

  const changeText = function (event) {
    event.target.attributes[0].value = '';
    str += event.target.value;
    //event.target.value = '';
    dispatch({ type: 'ADD_TEXT' });
  };

  useEffect(() => {
    if (state.flag === true) {
      dispatch({ type: 'INCREASE_NUM' });
    }
    if (state.flag === false) {
      dispatch({ type: 'DECREASE_NUM' });
    }
  }, [state.counter]);

  return (
    <div className="reduce-div">
      <h3>CounterTextReduce</h3>
      <h4>useReducer_useEffect_useContext</h4>
      <span>user: {user}</span>
      Counter: {state.counter}
      <div className="reduce-button-div">
        <button onClick={() => dispatch({ type: 'DECREMENT_COUNTER' })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT_COUNTER' })}>
          Increment
        </button>
      </div>
      <br></br>
      <div className="reduce-text-div">
        <p>text: {state.text}</p>
        <input placeholder="type text:" onChange={changeText} />
        <br></br>
        <button onClick={() => dispatch({ type: 'ERASE_TEXT' })}>
          erase text
        </button>
        <br></br>
      </div>
      <div className='reduce-num-div'>
        <div>
        Num: {state.num}
        </div>
      </div>
    </div>
  );
};

export default CounterTextReduce;
