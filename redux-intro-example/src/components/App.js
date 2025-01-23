import { useSelector } from 'react-redux';
import Counter from './Counter';
import InputColor from './InputColor';

function App() {
  const color = useSelector((state) => state.color);

  return (
    <div className="container text-center mt-5">
      <div
        className="card shadow-lg p-4 mb-5"
        style={{ backgroundColor: color }}
      >
        <h3 className="p-3">APP</h3>
      </div>

      <Counter />
      <div className="my-4">
        <hr className="border border-2 rounded" />
      </div>
      <InputColor />
    </div>
  );
}

export default App;
