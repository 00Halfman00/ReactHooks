import React, { createContext, useState } from 'react';
import { createRoot } from 'react-dom/client';
import User from './User.jsx';
import Users from './Users.jsx';
import Counter from './Counter.jsx';
import Text from './Text.jsx';
import CounterTextReduce from './CounterTextReduce.jsx';
//import create from 'babel-preset-react-app/create';
const root = createRoot(document.getElementById('root'));

export const userContext = createContext(null);

const App = () => {
  const [user, setUser] = useState('');
  return (
    <div className="app-div">
      <userContext.Provider value={{ user, setUser }}>
        <User />
        <Users />
        <Counter />
        <Text />
        <CounterTextReduce />
      </userContext.Provider>
    </div>
  );
};

root.render(<App />);
