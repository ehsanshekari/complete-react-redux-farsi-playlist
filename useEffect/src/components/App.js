import { useState, useEffect } from 'react';

function App() {
  const [variable1, setVariable1] = useState(1);
  const [variable2, setVariable2] = useState(0);

  useEffect(() => console.log('I was called!'), [variable1]);
  // no array --> in each render
  // empty ---> just the first render
  // array of variables ---> in the first render and each variable change

  return (
    <div className="container mt-5">
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Variable 1</h5>
              <p className="card-text">
                This is variable 1: <strong>{variable1}</strong>
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setVariable1(variable1 + 1)}
              >
                Increase Variable 1
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Variable 2</h5>
              <p className="card-text">
                This is variable 2: <strong>{variable2}</strong>
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setVariable2(variable2 + 1)}
              >
                Increase Variable 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;