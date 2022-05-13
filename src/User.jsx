import React, {useState, useContext} from 'react';
import { userContext } from './index.jsx';

const User = () => {
  const {user, setUser} = useContext(userContext);
  return (
    <div>
      {user}
    </div>
  );
}

export default User;
