import { useState, useCallback } from 'react';
import Fruits from './Fruits';

const App = () => {
  const [count, setCount] = useState(1);
  const [fruits, setFruits] = useState(['banana', 'orange']);

  const increment = () => {
    setCount((count) => count + 1);
  };

  // const addAnotherApple = () => {
  //   console.log('addName');
  //   setFruits([...fruits, 'apple']);
  // };

  const addAnotherApple = useCallback(() => {
    setFruits([...fruits, 'apple']);
  },[fruits]);

  return (
    <div className="container mt-5">
      <Fruits fruits={fruits} onButtonClick={addAnotherApple} />

      <hr className="my-5" />

      <div className="text-center">
        <h2 className="mb-3">Counter</h2>
        <p className="fs-4">
          Count: <span className="fw-bold">{count}</span>
        </p>
        <button
          onClick={increment}
          className="btn btn-success btn-lg shadow-sm"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;
