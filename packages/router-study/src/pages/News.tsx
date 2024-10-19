import {
  useNavigationType,
  useResolvedPath,
  useNavigate,
} from "react-router-dom";

export default function News() {
  const navigate = useNavigate();
  console.log("News Component", useNavigationType());
  console.log("News Component", useResolvedPath("/user?id=001&name=tom#qwe"));

  const handleSkip = () => {
    // 编程式导航
    navigate(`/about?type=1`);
  };

  return (
    <ul>
      <li onClick={handleSkip}>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  );
}
