import { FC, useState, useEffect } from "react";
import useLatest from "./useLatest";

const Index: FC<any> = () => {
  const [count, setCount] = useState(0);

  const ref = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(ref.current + 1);
      console.log("count:", count);
      console.log("ref:", ref);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>自定义Hooks：useLatest</div>
      <div>count: {count}</div>
    </>
  );
};

export default Index;
