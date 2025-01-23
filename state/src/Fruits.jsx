import { useState } from 'react';

const Fruits = () => {
  const [term, setTerm] = useState('');
  const [fruits, setFruits] = useState(['apple']);

  const addFruit = () => {
    console.log('addFruit', term);
    setFruits([...fruits, term]);
    setTerm('');
  };

  return (
    <div className="mt-4">
      <h1 className="text-center mb-4">Fruit List</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a fruit"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <button className="btn btn-primary" onClick={addFruit}>
              Add Fruit
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            {fruits.map((fruit, index) => (
              <li key={index} className="list-group-item">
                {fruit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fruits;
