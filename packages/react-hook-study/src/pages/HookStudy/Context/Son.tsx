import { FC, useContext } from 'react';
import { countContext } from './context';

const Son: FC<any> = () => {
  const count = useContext(countContext)

  return (
    <div style={{ marginTop: 10 }}>孙组件获取到的count: {count}</div>
  )
}

export default Son