import React from 'react';
import {increase, decrease} from '../redux/action-creators'
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(store => store.counter);

  return (
    <div className="container text-center mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="mb-4">Counter</h3>
        <div className="fs-4 mb-3">Current Value: <span className="badge bg-primary">{counter}</span></div>
        <div>
          <button
            className="btn btn-success me-2"
            onClick={() => dispatch(increase())}
          >
            INCREMENT
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(decrease())}
          >
            DECREMENT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
