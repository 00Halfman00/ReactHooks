import React from 'react';
import { createRoot } from 'react-dom/client';
import Counter_useState from './Counter_useState.jsx';
import Text_useState from './Text_useState.jsx';
import Counter_Text_Reduce_useEffect from './Counter_Text_Reduce_useEffect.jsx';
const root = createRoot(document.getElementById('root'));

const App = () => {
  return (
    <div className="app-div">
      <Counter_useState />
      <Text_useState />
      <Counter_Text_Reduce_useEffect />
    </div>
  );
};

root.render(<App />);
