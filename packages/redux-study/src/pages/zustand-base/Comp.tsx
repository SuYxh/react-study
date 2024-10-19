import useCounterStore from "./stores/counterStore";
import useUserStore from "./stores/userStore";

const App = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  const userData = useUserStore((state) => state.userData);
  const status = useUserStore((state) => state.status);
  const error = useUserStore((state) => state.error);
  const fetchUser = useUserStore((state) => state.fetchUser);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>User</h1>
      <button onClick={fetchUser} disabled={status === "loading"}>
        {status === "loading" ? "Loading..." : "Fetch User"}
      </button>
      {status === "succeeded" && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
      {status === "failed" && <p>Error: {error}</p>}
    </div>
  );
};

export default App;
