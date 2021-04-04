import React from 'react';
import Counter from './Counter';
import Message from './Message';
import FonsColor from './FonsColor';

function App() {
  return (
    <div className="App">
      <Message props="Wellcome user, here you can add or subtract also u can change color" />
      <Counter />
      <FonsColor />
    </div>
  );
}

export default App;