import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

// 使用 React.lazy 时需要 React.Suspense：当你使用 React.lazy 进行组件的懒加载时，你需要确保这些懒加载的组件被包裹在一个 <React.Suspense> 组件中。这是因为懒加载的组件在加载过程中会处于未就绪状态，Suspense 组件可以在加载完成前显示备用内容（如加载指示器）。
const About = lazy(() => import("../pages/About"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound")); // 引入 NotFound 组件
const News = lazy(() => import("../pages/News"));
const Message = lazy(() => import("../pages/Message"));
const Detail = lazy(() => import("../pages/Detail"));

// const loadingMessage = <div>Loading...</div>;
const loadingMessage = <div></div>;

export default [
  {
    path: "/",
    element: <Navigate to="/about" />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={loadingMessage}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={loadingMessage}>
        <Home />
      </Suspense>
    ),
    children: [
      {
        path: "news",
        element: (
          <Suspense fallback={loadingMessage}>
            <News />
          </Suspense>
        ),
      },
      {
        path: "message",
        element: (
          <Suspense fallback={loadingMessage}>
            <Message />
          </Suspense>
        ),
        children: [
          {
            path: "detail",
            element: (
              <Suspense fallback={loadingMessage}>
                <Detail />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*", // 匹配所有未被上面规则匹配的路径
    element: (
      <Suspense fallback={loadingMessage}>
        <NotFound />
      </Suspense>
    ),
  },
];
