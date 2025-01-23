import { memo } from 'react';

const Fruits = ({ fruits, onButtonClick }) => {
  console.log('Fruits Component Rendered!');

  return (
    <div className="mt-4 container">
      <h1 className="text-center mb-4 display-5">Fruit List</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group shadow-sm">
            {fruits.map((fruit, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {fruit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <button
            onClick={onButtonClick}
            className="btn btn-primary btn-lg shadow-sm"
          >
            Add another apple!
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Fruits);
