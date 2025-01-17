import React, { useState } from 'react';
import Card from './Card';

const App: React.FC = () => {
  const [size, setSize] = useState(250);

  const increaseSize = () => {
    setSize((prevSize) => Math.min(prevSize + 50, 500));
  };

  const decreaseSize = () => {
    setSize((prevSize) => Math.max(prevSize - 50, 150));
  };

  return (
    <div>
      <h1>Resizable Card Example</h1>
      <Card
        title="Resizable Card"
        description="Click + or - to resize this card."
        size={size}
        onIncrease={increaseSize}
        onDecrease={decreaseSize}
      />
    </div>
  );
};

export default App;
