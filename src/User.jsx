import React, { useState, useContext, useRef } from 'react';
import { userContext } from './index.jsx';

const User = () => {
  const { user, setUser } = useContext(userContext);
  const userInputRef = useRef(null);
  const enterUser = () => {
    if (userInputRef.current.value[1]) {
      setUser(userInputRef.current.value);
      userInputRef.current.value = '';
    }
  };
  return (
    <div className="user-div">
      <h3>User</h3>
      <h4>useState_useRef_useContex</h4>
      <span>user: {user}</span>
      <br></br>
      <input type="text" ref={userInputRef}></input>
      <br></br>
      <button onClick={enterUser}>enter</button>
    </div>
  );
};

export default User;
