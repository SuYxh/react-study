import { useState, useEffect, FC } from "react";
import { Button } from "antd";

const Child: FC<any> = () => {
  useEffect(() => {
    console.log("挂载");

    return () => {
      console.log("卸载");
    };
  }, []);

  return <div>child 组件</div>;
};

const Index: FC<any> = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        {flag ? "卸载" : "挂载"}
      </Button>
      {flag && <Child />}
    </div>
  );
};

export default Index;
