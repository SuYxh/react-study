import { useSearchParams } from "react-router-dom";

export default function About() {
  const [search, setSearch] = useSearchParams();
  console.log("About Component", search.get("type"));
  return (
    <div>
      <h1>我是About的内容,type:{search.get("type")}</h1>

      <button onClick={() => setSearch({ type: "99" })}>设置type</button>
    </div>
  );
}
