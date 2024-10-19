import { observer, useLocalObservable } from 'mobx-react';
import rootStore from './stores/index';

const App = observer(() => {
  const { counterStore, userStore } = useLocalObservable(() => rootStore);

  const handleIncrement = () => {
    counterStore.increment();
  };

  const handleDecrement = () => {
    counterStore.decrement();
  };

  const handleFetchUser = () => {
    userStore.fetchUser();
  };

  return (
    <div>
      <h1>Counter-mobx: {counterStore.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h1>User-mobx</h1>
      <button onClick={handleFetchUser} disabled={userStore.status === 'loading'}>
        {userStore.status === 'loading' ? 'Loading...' : 'Fetch User'}
      </button>
      {userStore.status === 'succeeded' && (
        <div>
          <p>Name: {userStore.userData!.name}</p>
          <p>Email: {userStore.userData!.email}</p>
        </div>
      )}
      {userStore.status === 'failed' && <p>Error: {userStore.error}</p>}
    </div>
  );
});

export default App;