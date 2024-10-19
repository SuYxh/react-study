import { forwardRef, useImperativeHandle } from "react";

// 定义 Ref 的类型，包含所有通过 ref 暴露的方法
export interface ChildTwoHandle {
  handler: () => void;  // 此方法没有参数，没有返回值
}

// 定义 Props 的类型，目前没有使用任何特定的 prop，所以为空接口
interface ChildTwoProps {}

const ChildTwo = forwardRef<ChildTwoHandle, ChildTwoProps>((props, ref) => {
  const handler = () => {
    console.log("子组件 2");
  };

  useImperativeHandle(ref, () => ({
    handler
  }));

  return (
    <div>
      <div>子组件2</div>
    </div>
  );
});

export default ChildTwo;
