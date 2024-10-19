const initialState = 0

const countReducer = (preState: any = initialState, action: any) => {
  const { type, data } = action
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}

export default countReducer