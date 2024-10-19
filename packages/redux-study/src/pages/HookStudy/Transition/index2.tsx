import { useState } from "react";
import { Input } from "antd";

const Index: React.FC<any> = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);

  return (
    <>
      <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
      <Input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          const res: string[] = [];
          for (let i = 0; i < 10000; i++) {
            res.push(e.target.value);
          }
          setList(res);
        }}
      />
      {list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
};

export default Index;
