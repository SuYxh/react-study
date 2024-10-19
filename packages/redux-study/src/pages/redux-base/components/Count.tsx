import store from '../store/index';

const Comp1 = () => {
  
  const handleAdd = () => {
    store.dispatch({type: 'increment', data: 1 })
    
  }

  const handleDecrement = () => {
    store.dispatch({type: 'decrement', data: 1 })
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
