import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import store from "./pages/redux-base/store";
import store from "./pages/redux-pro/store";

// 获取 DOM 容器
const container = document.getElementById("root");

if (!container) {
  throw new Error("Failed to find the root element");
}

// 创建根节点
const root = ReactDOM.createRoot(container);

// 渲染应用
root.render(<App />);

// 监听 store 的变化
store.subscribe(() => {
  console.log('store 发生了变化');
  root.render(<App />);
});

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <App />
// );
