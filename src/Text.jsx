// useState hook example with Text
import React, { useState } from 'react';

const Text = () => {
  const [text, setText] = useState('');
  const changeText = (event) => {
    setText(text + event.target.value);
    event.target.value = '';
  };
  return (
    <div className="text-div">
      <h3>Input text:</h3>
      <input onChange={changeText} />
      <br></br>
      {text}
      <br></br>
      <br></br>
    </div>
  );
};

export default Text;
