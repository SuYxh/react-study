import { useState } from "react";
import { Button } from "antd";

const Index: React.FC<any> = () => {
  const [count, setCount] = useState<number>(0);
  const [countObj, setCountObj] = useState<any>({ count: 0 });


  return (
    <>
      <div>数字：{count}</div>
      <div>数字countObj：{countObj.count}</div>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        第一种方式+1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => setCount((v) => v + 1)}
      >
        第二种方式+1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => {
          countObj.count ++
          // 这里需要设置一个新对象
          setCountObj(countObj)

          // const obj = { count: countObj.count + 1 }
          // setCountObj(obj)
        }}
      >
        第三种方式-错误
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => {
          setCountObj((prevState: any) => ({ count: prevState.count + 1 }))
        }}
      >
        第三种方式-正确
      </Button>
    </>
  );
};

export default Index;
