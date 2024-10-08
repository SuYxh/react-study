import useUpdate from "./useUpdate";
import { Button } from "antd";

const Index = () => {
  const update = useUpdate();

  return (
    <div>
      <div>时间：{Date.now()}</div>
      <Button
        type="primary"
        onClick={() => {
          update();
        }}
      >
        更新
      </Button>
    </div>
  );
};

export default Index;
