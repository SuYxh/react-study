
export const createIncrementAction = (data: number) => ({type: 'increment', data })
export const createDecrementAction = (data: number) => ({type: 'decrement', data })

export const createIncrementAsyncAction = (data: number) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, 1000);
  }
}

