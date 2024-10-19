// import ReduxBase from './pages/redux-base/index';
// import ReduxPro from './pages/redux-pro/index';
// import ReactReduxPro from './pages/react-redux-pro/index';
import ReduxjsToolkit from "./pages/reduxjs-toolkit/Comp";
import { Provider } from "react-redux";
import store from "./pages/reduxjs-toolkit/store";

function App() {
  return (
    <>
      {/* 注意在 main.tsx 中 引入组件对应的 store， 否则不生效 */}
      {/* <ReduxBase></ReduxBase> */}
      {/* <ReduxPro></ReduxPro> */}
      {/* <ReactReduxPro></ReactReduxPro> */}
      {/* 使用 reduxjs/toolkit 的 store */}
      <Provider store={store}>
        <ReduxjsToolkit></ReduxjsToolkit>
      </Provider>
      ,
    </>
  );
}

export default App;
