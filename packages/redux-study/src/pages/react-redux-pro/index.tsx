
import { Provider } from 'react-redux';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import store from './store';

const Index = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>我是 react-redux-pro 的内容</h1>
      </div>
      <Comp1></Comp1>
      <Comp2></Comp2>
    </Provider>
  )
}

export default Index
