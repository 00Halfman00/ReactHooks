import React, { useContext, useState, useEffect, useMemo } from 'react';
import { userContext } from './index.jsx';

const Users = () => {
  const { user } = useContext(userContext);
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    users[users.length] = user;
    //console.log('users: ', users);
    if (users.length > 5) setFlag(true);
  }, [user]);

  const findLongest = (arr) => {
    let longest = '';
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
    //console.log('after for loop');
    return longest;
  };

  const getLongestName = useMemo(() => {
    return findLongest(users);
    //console.log('in memo');
  }, [flag]);

  return (
    <div className="users-div">
      <h3>Users</h3>
      <h4>useState_useContext</h4>
      <h4>useEffect_useMemo</h4>
      <p>user: {user}</p>
      <p className='longest-name'>longest name: {getLongestName}</p>
    </div>
  );
};

export default Users;
