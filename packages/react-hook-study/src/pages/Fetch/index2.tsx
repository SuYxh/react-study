import { useFetch } from './useFetch';

const FetchTest = () => {
  const { data, loading, error, refresh, cancel } = useFetch('http://127.0.0.1:7001/', {}, false)

  if (loading) {
    return <div>
      loading...
      <button onClick={cancel}>cancel</button>
      </div>
  }

  if (error) {
    return <div>error: { JSON.stringify(error) }</div>
  }

  const handleMutil = () => {
    for (let index = 0; index < 5; index++) {
      refresh()
    }
  }

  return (
    <div>
      <h1>data:</h1>
      <p>{ JSON.stringify(data) }</p>

      <br />
      <br />
      <br />

      <button onClick={refresh}>刷新</button>
      <button onClick={handleMutil}>handleMutil</button>
    </div>
  )
}

export default FetchTest