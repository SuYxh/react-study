`useEffect` 和 `useLayoutEffect` 是 React 中用于处理副作用的两个 Hooks。它们的主要区别在于执行时机，这决定了它们的使用场景。

### `useEffect`

#### 执行时机：
- `useEffect` 在浏览器绘制（paint）之后异步执行。这意味着 `useEffect` 中的代码不会阻塞浏览器的渲染过程。

#### 使用场景：
- **数据获取**：例如从 API 获取数据。
- **事件监听**：例如添加和移除事件监听器。
- **DOM 操作**：例如操作 DOM 元素，但不会引起视觉上的变化。
- **订阅和取消订阅**：例如订阅和取消订阅某些服务。
- **其他不影响用户界面的副作用**：例如记录日志、发送分析数据等。

### `useLayoutEffect`

#### 执行时机：
- `useLayoutEffect` 在浏览器绘制（paint）之前同步执行。这意味着 `useLayoutEffect` 中的代码会阻塞浏览器的渲染过程，直到 `useLayoutEffect` 中的代码执行完毕。

#### 使用场景：
- **需要同步执行的 DOM 操作**：例如测量 DOM 元素的尺寸或位置，并在渲染之前进行调整。
- **需要避免视觉闪烁的场景**：例如在 DOM 更新后立即进行某些操作，以避免用户看到中间状态。
- **需要立即同步更新的副作用**：例如在 DOM 更新后立即进行某些计算或调整。

### 总结

- **`useEffect`**：适用于大多数副作用场景，尤其是那些不需要立即同步执行的操作。
- **`useLayoutEffect`**：适用于需要同步执行的 DOM 操作或需要避免视觉闪烁的场景。

### 示例

#### `useEffect` 示例：
```jsx
useEffect(() => {
  // 异步获取数据
  fetchData().then(data => setData(data));

  // 添加事件监听器
  window.addEventListener('resize', handleResize);

  // 清理函数
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

#### `useLayoutEffect` 示例：
```jsx
useLayoutEffect(() => {
  // 测量 DOM 元素的尺寸
  const element = ref.current;
  const { width, height } = element.getBoundingClientRect();

  // 根据测量结果调整 DOM 元素
  element.style.width = `${width * 2}px`;
  element.style.height = `${height * 2}px`;
}, []);
```

### 注意事项

- **性能影响**：由于 `useLayoutEffect` 会阻塞渲染，因此应谨慎使用，避免在 `useLayoutEffect` 中执行耗时操作，以免影响用户体验。
- **兼容性**：在某些情况下，`useLayoutEffect` 可能会在服务端渲染（SSR）时引发警告，因为它依赖于 DOM。如果遇到这种情况，可以考虑使用 `useEffect` 作为替代。