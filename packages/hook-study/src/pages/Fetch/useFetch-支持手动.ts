import { useState, useEffect, useCallback } from 'react';

export function useFetch(url: string, options?: any, isAuto?: boolean) {
  console.log('-->', null == undefined);
  if (isAuto == null) {
    isAuto = true
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [controller, setController] = useState<AbortController | null>(null);

  const requestInterceptor = useCallback((requestOptions: any) => {
    console.log('请求拦截器');
    return requestOptions;
  }, []);

  const responseInterceptor = useCallback(async (response: any) => {
    console.log('响应拦截器');

    if (!response.ok) {
      throw new Error(`http error ${response.status}`);
    }

    const result = await response.json();

    if (result.code !== 0) {
      throw new Error(result.msg || '网络错误');
    }

    return result.data;
  }, []);

  const http = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // 创建一个新的AbortController
      const newController = new AbortController();
      setController(newController);

      const _options = requestInterceptor({ ...(options ?? {}), signal: newController.signal });

      const response = await fetch(url, _options);

      const result = await responseInterceptor(response);

      setData(result);
    } catch (error: any) {
      console.log('设置错误信息', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url, options, requestInterceptor, responseInterceptor]);

  const refresh = useCallback(() => {
    http();
  }, [http]);

  const cancel = useCallback(() => {
    if (controller) {
      controller.abort();
    }
  }, [controller]);

  useEffect(() => {
    if (isAuto) {
      http();
    }

    // 组件卸载时取消请求
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [http, isAuto]);

  return {
    data,
    loading,
    error,
    refresh,
    cancel,
  };
}