import { FC, useState } from "react";
import Child from "./Child";
import Son from './Son';
import { countContext } from "./context";
import { Button } from "antd";

const Index: FC<any> = () => {
  const [count, setCount] = useState(999);

  return (
    <div>
      <div>父组件中的count：{count}</div>
      <Button type="primary" onClick={() => setCount((v) => v + 1)}>
        点击+1
      </Button>
      <countContext.Provider value={count}>
        <Son></Son>
        <Child></Child>
      </countContext.Provider>
    </div>
  );
};

export default Index