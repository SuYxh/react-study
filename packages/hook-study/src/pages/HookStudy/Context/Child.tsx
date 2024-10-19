import { FC, useContext } from 'react';
import { countContext } from './context';
import Son from './Son';

const Child: FC<any> = () => {
  const count = useContext(countContext)

  return (
    <div style={{ marginTop: 10 }}>
      子组件获取到的count: {count}

      <Son></Son>  
    </div>
  ) 
}

export default Child