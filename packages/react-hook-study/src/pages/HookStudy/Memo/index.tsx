import { FC, useState, useMemo } from "react";
import { Button } from "antd";

const Chiuld = () => {
  const [state, setState] = useState(Math.random())

  return (
    <div>
      子组件state: { state }
    </div>
  )
}

const usePow = (list: number[]) => {
  console.log("我是usePow", Math.random());
  return list.map((item: number) => {
    return Math.pow(item, 2);
  });
};

const usePow2 = (list: number[]) => {
  return useMemo(() => {
    console.log("我是usePow2", Math.random());
    return list.map((item: number) => {
      return Math.pow(item, 2);
    });
  }, [])
};

const Index: FC<any> = () => {
  const [count, setCount] = useState(0);

  const pow = usePow([1,2,3])
  const pow2 = usePow2([1,2,3])

  return (
    <div>
      <div>pow: { pow }</div>
      <div>pow2: { pow2 }</div>

      <div>count: {count}</div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </Button>

      <Chiuld></Chiuld>
    </div>
  );
};

export default Index
