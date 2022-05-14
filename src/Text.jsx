// useState hook example with Text
import React, { useState, useRef, useContext } from 'react';
import { userContext } from './index.jsx';

const Text = () => {
  const { user } = useContext(userContext);
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
      <h3>Text</h3>
      <h4>useState_useRef_useContext </h4>
      <p>user: {user}</p>
      <p>text: {text}</p>
      <input ref={inputRef} />
      <br></br>
      <button onClick={submitAndClear}>clear input field</button>
      <br></br>
      <button onClick={() => setText('')}>clear text</button>
      <br></br>
    </div>
  );
};

export default Text;
