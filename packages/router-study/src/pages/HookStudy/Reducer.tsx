import { FC, useReducer } from "react";
import { Button } from "antd";

const Index: FC<any> = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "+":
        return (state = state + action.payload ?? 1);
        break;
      case "-":
        return (state = state - action.payload ?? 1);
        break;

      default:
        return state;
        break;
    }
  }, 0);

  return (
    <div>
      <div>counter: {state}</div>
      <Button
        onClick={() => {
          dispatch({ type: "+", payload: 1 });
        }}
      >
        {" "}
        +{" "}
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: "-", payload: 1 });
        }}
      >
        {" "}
        -{" "}
      </Button>
    </div>
  );
};

export default Index;
