import { FC, useImperativeHandle } from 'react';


const ChildOne: FC<any> = (props) => {

  const handler = () => {
    console.log('子组件 1');
  }

  useImperativeHandle(props.cRef, () => {
    return {
      handler
    }
  })


  return (
    <div>
      <div>子组件1</div>
    </div>
  )
}

export default ChildOne