import { connect } from 'react-redux';
import { createIncrementAsyncAction } from './action';

const Comp2 = (props: any) => {
  return (
    <div>
      <p>comp2: { props.count }</p>
      <button onClick={() => props.createIncrementAsyncAction(2)}>increment</button>
    </div>
  )
}

const Comp = connect(
  state => ({ count: state }),
  {
    createIncrementAsyncAction
  }
)(Comp2)

Comp.displayName = "Comp2"

export default Comp
