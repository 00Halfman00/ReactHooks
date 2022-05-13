// useState hook example with Text
import React, { useState, useRef, useContext } from 'react';
import {userContext} from './index.jsx';


const Text_useState_useRef = () => {
  const {user} = useContext(userContext);
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const submitAndClear = () => {
    if (inputRef.current.value[1]) {
      setText(text + inputRef.current.value + ' ');
      inputRef.current.value = '';
    }
    console.log('text: ', text);
  };
  return (
    <div className="text-div">
      <h4>Text_useState_useRef </h4>
      <h5>{user}</h5>
      {text}
      <input ref={inputRef} />
      <br></br>
      <button onClick={submitAndClear}>clear input field</button>
      <br></br>
      <button onClick={() => setText('')}>clear text</button>
      <br></br>
    </div>
  );
};

export default Text_useState_useRef;
