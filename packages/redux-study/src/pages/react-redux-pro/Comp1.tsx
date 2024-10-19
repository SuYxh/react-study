import { connect } from "react-redux";
import { createIncrementAction, createDecrementAction } from "./action";

const Comp1 = (props: any) => {
  return (
    <div>
      <div>comp1: {props.count}</div>
      <button onClick={() => props.createIncrementAction(1)}>increment</button>
      <button onClick={() => props.createDecrementAction(1)}>decrement</button>
    </div>
  );
};

// export default connect((state) => ({ count: state }), {
//   createIncrementAction,
//   createDecrementAction,
// })(Comp1);

// 显式命名连接后的组件
const ConnectedComp1 = connect(
  (state) => ({ count: state }),
  { createIncrementAction, createDecrementAction }
)(Comp1);

ConnectedComp1.displayName = 'ConnectedComp1';

export default ConnectedComp1;