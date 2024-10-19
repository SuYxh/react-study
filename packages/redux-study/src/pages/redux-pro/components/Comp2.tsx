import store from '../store/index';
import { createIncrementAsyncAction } from '../store/action';


const Comp2 = () => {
  
  const handleIncrementAsync = () => {
    console.log('handleIncrementAsync')
    store.dispatch(createIncrementAsyncAction(2))
  }

  return (
    <div>
      <div>Comp2： {store.getState()}</div>
      <button onClick={handleIncrementAsync}>handleIncrementAsync</button>
    </div>
  )
}

export default Comp2
