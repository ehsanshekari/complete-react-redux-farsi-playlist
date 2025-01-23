import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setColor } from '../redux/action-creators';

function InputColor() {
  const dispatch = useDispatch();
  const [inputColor, setInputColor] = useState('');

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4 text-center">
        <h3 className="mb-4">Set a Color</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a color (e.g., #FF5733 or red)"
            value={inputColor}
            onChange={(e) => setInputColor(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary w-100"
          onClick={() => dispatch(setColor(inputColor))}
        >
          Set Color
        </button>
      </div>
    </div>
  );
}

export default InputColor;
