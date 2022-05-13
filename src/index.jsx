import React, { createContext, useState } from 'react';
import { createRoot } from 'react-dom/client';
import User from './User.jsx';
import Counter_useState from './Counter_useState.jsx';
import Text_useState_useRef from './Text_useState_useRef.jsx';
import Counter_Text_Reduce_useEffect from './Counter_Text_Reduce_useEffect.jsx';
//import create from 'babel-preset-react-app/create';
const root = createRoot(document.getElementById('root'));

export const userContext = createContext(null);

const App = () => {
  const [user, setUser] = useState('oscar');
  return (
    <div className="app-div">
      <userContext.Provider value={{ user, setUser }}>
        <User/>
        <Counter_useState />
        <Text_useState_useRef />
        <Counter_Text_Reduce_useEffect />
      </userContext.Provider>
    </div>
  );
};

root.render(<App />);
