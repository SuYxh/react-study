const ongoingRequests = new Map();

function sendRequest(url, options = {}) {
    const { method = 'GET', body = null } = options;
    const key = `${method}:${url}:${JSON.stringify(body)}`;

    // 如果有重复的请求，取消前一个
    if (ongoingRequests.has(key)) {
        ongoingRequests.get(key).abort();
    }

    // 创建新的 AbortController，并更新存储
    const controller = new AbortController();
    ongoingRequests.set(key, controller);
    options.signal = controller.signal;

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // 处理数据
        })
        .catch(error => {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted for:', key);
            } else {
                console.error('Fetch error:', error);
            }
        })
        .finally(() => {
            // 请求完成后，清除存储的controller
            ongoingRequests.delete(key);
        });
}

// 示例用法
sendRequest('http://127.0.0.1:7001/handler1', { method: 'POST', body: JSON.stringify({ data: 'value1' }) });
sendRequest('http://127.0.0.1:7001/handler1', { method: 'POST', body: JSON.stringify({ data: 'value1' }) }); // 这将取消前一个请求
sendRequest('http://127.0.0.1:7001/', { method: 'GET' });
