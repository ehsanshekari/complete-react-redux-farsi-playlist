import React from 'react';
import { increment, decrement, incrementByValue } from '../redux/features/couterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.counter)
  return (
    <div className="container text-center mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="mb-4">Counter</h3>
        <div className="fs-4 mb-3">Current Value: <span className="badge bg-primary">{count}</span></div>
        <div>
          <button
            className="btn btn-success me-2"
            onClick={() =>{console.log('clicked!'); dispatch(increment())} }
          >
            INCREMENT
          </button>
          <button
            className="btn btn-danger me-2"
            onClick={() => {dispatch(decrement())}}
          >
            DECREMENT
          </button>
          <button
            className="btn btn-success"
            onClick={() =>{dispatch(incrementByValue(7))} }
          >
            INCREMENT BY 7
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
