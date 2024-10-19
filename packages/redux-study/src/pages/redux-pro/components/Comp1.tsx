import store from '../store/index';
import { createDecrementAction, createIncrementAction } from '../store/action';

const Comp1 = () => {
  
  const handleAdd = () => {
    console.log('handleAdd')
    store.dispatch(createIncrementAction(1))    
  }

  const handleDecrement = () => {
    store.dispatch(createDecrementAction(1))
  }

  return (
    <div>
      <div>Comp1： {store.getState()}</div>

      <button onClick={handleAdd}>increment</button>
      <button onClick={handleDecrement}>decrement</button>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Comp1
