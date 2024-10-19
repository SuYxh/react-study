
// import ReduxBase from './pages/redux-base/index';
// import ReduxPro from './pages/redux-pro/index';
import ReactReduxPro from './pages/react-redux-pro/index';

function App() {

  return (
    <>
      {/* 注意在 main.tsx 中 引入组件对应的 store， 否则不生效 */}
      {/* <ReduxBase></ReduxBase> */}
      {/* <ReduxPro></ReduxPro> */}
      <ReactReduxPro></ReactReduxPro>
    </>
  )
}

export default App
