import { useEffect, useState, useCallback } from "react";

const map = new Map()

function useFetch(url: string, options?: any) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  // const [controller, setController] = useState<AbortController | null>(null)
  const [reqKey, setReqKey] = useState('');

  const requestInterceptor = useCallback((options: any) => {
    console.log("请求拦截器");
    return { ...options };
  }, []);

  const responseInterceptor = useCallback(async (response: any) => {
    console.log("响应拦截器");
    if (!response.ok) {
      throw new Error(`http error ${response.status}`);
    }
    const result = await response.json();
    return result;
  }, []);

  const http = useCallback(async () => {
    const key = `url:${url},Body:${JSON.stringify(options)}`
    setReqKey(key)

    if (map.has(key)) {
      const c = map.get(key)
      c.abort()
    }

    const newController = new AbortController()
    // setController(newController)
    map.set(key, newController)

    setLoading(true);
    setError(null);
    try {
      const options1 = Object.assign({}, { signal: newController.signal }, options)
      const _options = requestInterceptor(options1 ?? {});

      const response = await fetch(url, _options);

      const result = await responseInterceptor(response);

      setData(result);
    } catch (error: any) {
      if (error.name === 'AbortError') {
        setError(`请求被取消啦: ${key}`);
      } else {
        setError(error?.message);
      }
    } finally {
      setLoading(false);
      map.delete(key)
    }
  }, [url, options, requestInterceptor, responseInterceptor]);

  const refresh = useCallback(() => {
    http();
  }, [http]);

  const cancel = useCallback(() => {
    // controller?.abort()
    if (map.has(reqKey)) {
      const c = map.get(reqKey)
      c.abort()
    }
  }, [reqKey]);

  useEffect(() => {
    if (options.isAuto || options.isAuto == null) {
      http();
    }
  }, [http, options]);

  return {
    data,
    loading,
    error,
    refresh,
    cancel,
  };
}

export default useFetch;

