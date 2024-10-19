import { useEffect, useState, useCallback } from "react";
function useFetch(url: string, options?: any) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [controller, setController] = useState<AbortController | null>(null)

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
    if (controller) {
      controller.abort()
    }

    const newController = new AbortController()
    setController(newController)

    setLoading(true);
    setError(null);
    try {
      const options1 = Object.assign({}, { signal: newController.signal }, options)
      const _options = requestInterceptor(options1 ?? {});

      const response = await fetch(url, _options);

      const result = await responseInterceptor(response);

      setData(result);
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  }, [url, options, requestInterceptor, responseInterceptor]);

  const refresh = useCallback(() => {
    http();
  }, [http]);

  const cancel = useCallback(() => {
    controller?.abort()
  }, [controller]);

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

