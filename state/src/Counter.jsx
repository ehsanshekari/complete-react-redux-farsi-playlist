import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter(counter + 1);
    console.log('increased!', counter);
  };

  const decrease = () => {
    setCounter(counter - 1);
    console.log('decreased!', counter);
  };

  return (
    <div className="text-center mt-5">
      <p>
        The current value of counter is:{' '}
        <span className="fw-bold">{counter}</span>
      </p>
      <div>
        <button onClick={increase} className="btn btn-success me-3">
          Increase
        </button>
        <button onClick={decrease} className="btn btn-danger">
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Counter;
