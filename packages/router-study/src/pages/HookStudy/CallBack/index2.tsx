import React, { useCallback, memo } from 'react';

const Child = memo(({ onClick }) => {
  console.log('Child is rendering');
  return <button onClick={onClick}>Click me</button>;
});

function Parent() {
  const [count, setCount] = React.useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <Child onClick={handleClick} />
      <div>Count: {count}</div>
    </div>
  );
}

export default Parent