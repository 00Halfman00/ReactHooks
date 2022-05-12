// useState hook example with Text
import React, { useState, useRef } from 'react';

const Text_useState = () => {

  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const submitAndClear = () => {
    if(inputRef.current.value[1]){
      setText(text + inputRef.current.value + ' ');
      inputRef.current.value = '';
    }
    console.log('text: ', text)
  }
  return (
    <div className="text-div">
      <h3>Input text:</h3>
      <input ref={inputRef}/>
      <button onClick={submitAndClear}>clear</button>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Text_useState;

//onChange={changeText}
