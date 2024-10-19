import { useState } from 'react';
import useFetch1 from './useFetch2';

const FetchTest = () => {

  const [options, setOptons] = useState<any>({
  })
  const { data, loading, error, refresh, cancel } = useFetch1('http://127.0.0.1:7001/', options)

  if (loading) {
    return (
      <div>
      loading...
      <button onClick={cancel}>cancel</button>
      </div>
    )
  }

  if (error) {
    return <div>error: { JSON.stringify(error) }</div>
  }

  const updateOptions = () => {
    setOptons({})
  }

  return (
    <div>
      <h1>data:</h1>
      <p>{ JSON.stringify(data) }</p>

      <br />
      <br />

      <button onClick={refresh}>刷新</button>
      <button onClick={updateOptions}>updateOptions</button>
    </div>
  )
}

export default FetchTest