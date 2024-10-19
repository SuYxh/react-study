import { useSelector, useDispatch } from 'react-redux';
import { createIncrementAction, createDecrementAction } from "./action";

const Comp1 = () => {
  const count = useSelector((state: number) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div>comp1: {count}</div>
      <button onClick={() => dispatch(createIncrementAction(1))}>increment</button>
      <button onClick={() => dispatch(createDecrementAction(1))}>decrement</button>
    </div>
  );
};

export default Comp1;