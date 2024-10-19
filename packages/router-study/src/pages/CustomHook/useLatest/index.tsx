import { FC, useState, useEffect } from "react";

const Index: FC<any> = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("count:", count);
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>自定义Hooks：useLatest - 未使用</div>
      <div>count: {count}</div>
    </>
  );
};

export default Index;
