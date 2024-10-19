import { useState, useEffect, useRef } from "react";

const Closure = () => {
  const [count, setCount] = useState(0);

  const fn = () => {
    setCount(count + 1)
  }

  const cache = useRef(fn)

  cache.current = fn

  useEffect(() => {
    setInterval(() => {
      console.log(count);
      cache.current()
    }, 1000);
  }, []);


  return <div>count: {count}</div>;
};

export default Closure;
