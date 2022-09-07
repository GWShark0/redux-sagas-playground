import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const incrementAsync = () => {
    dispatch({ type: 'INCREMENT_ASYNC' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className="app">
      <div>{count}</div>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementAsync}>Increment after 1 second</button>
      </div>
    </div>
  );
}

export default App;
