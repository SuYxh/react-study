import { FC, useRef } from "react";
import { Button } from "antd";
import Child1 from "./Child1";
import Child2, { ChildTwoHandle } from "./Child2";

const Index: FC<any> = () => {
  const child1Ref = useRef();
  const child2Ref = useRef<ChildTwoHandle>(null);

  return (
    <div>
      <Button
        onClick={() => {
          console.log("调用子组件1的 handler 方法");
          child1Ref.current?.handler();
        }}
      >
        调用子组件1的 handler 方法
      </Button>
      <Child1 cRef={child1Ref}></Child1>
      <Child2 ref={child2Ref}></Child2>
      <Button
        onClick={() => {
          console.log("调用子组件2的 handler 方法");
          child2Ref.current?.handler()
        }}
      >
        调用子组件2的 handler 方法
      </Button>
    </div>
  );
};

export default Index;
