import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { decrement, increment } from "./redux/actions/counterActions";

function App() {
  const count = useSelector(state => state.counterReducer.count);

  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Redux counter</h1>
      <Button variant='success' onClick={() => dispatch(increment(5))}>
        +
      </Button>
      <p>{count}</p>
      <Button variant='danger' onClick={() => dispatch(decrement())}>
        -
      </Button>
    </div>
  );
}

export default App;
