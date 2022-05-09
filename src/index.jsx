import React from 'react';
import { createRoot } from 'react-dom/client';
import Counter from './Counter.jsx';
import Text from './Text.jsx';
import ReduceCounterText from './ReduceCounterText.jsx';
const root = createRoot(document.getElementById('root'));

const App = (props) => {
  return (
    <div className="app-div">
      <Counter />
      <Text />
      <ReduceCounterText />
    </div>
  );
};

root.render(<App />);
