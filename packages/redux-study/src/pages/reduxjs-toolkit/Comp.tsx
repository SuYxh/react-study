import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './features/counterSlice';
import { fetchUser } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);
  const user = useSelector((state: any) => state.user.userData);
  const userStatus = useSelector((state: any) => state.user.status);
  const userError = useSelector((state: any) => state.user.error);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleFetchUser = () => {
    dispatch(fetchUser() as any);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h1>User</h1>
      <button onClick={handleFetchUser} disabled={userStatus === 'loading'}>
        {userStatus === 'loading' ? 'Loading...' : 'Fetch User'}
      </button>
      {userStatus === 'succeeded' && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      {userStatus === 'failed' && <p>Error: {userError}</p>}
    </div>
  );
}

export default App;