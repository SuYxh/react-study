import { useState, useEffect, useCallback } from 'react';

export function useFetch(url: string, options?: any) {
  const [data, setData] = useState(null)  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [controller, setController] = useState<any>(null)


  const http = useCallback(async () => {
    if (controller) {
      console.log('请求取消')
      controller.abort()
    }

    const newController = new AbortController();
    setController(newController);

    const requestInterceotor = (requestOptions: any) => {
      // ...
      console.log('请求拦截器')
      return { ...requestOptions, signal: newController.signal }
    }
  
    const responseInterceptor = async (response: any) => {
      console.log('响应拦截器')
  
      if (!response.ok) {
        throw new Error(`http error ${response.status}`)
      }
  
      const result = await response.json()
  
      if (result.code !== 0) {
        throw new Error(result.msg || '网络错误') 
      }
  
      return result.data
    }


    try {
      setLoading(true)
      setError(null)

      const _options = requestInterceotor(options ?? {})

      const response = await fetch(url, _options)

      const result = await responseInterceptor(response)

      setData(result)
    } catch (error: any) {
      console.log('设置错误信息', error.message)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [url, options])

  const refresh = useCallback(() => {
    http()
  }, [http])

  useEffect(() => {
    http()

    return () => {
      if (controller) {
        controller.abort()
      }
    }
  }, [http])

  return {
    data,
    loading,
    error,
    refresh
  }
}

 