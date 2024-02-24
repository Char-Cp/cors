let isEnabled = true
chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
        var responseHeaders = details.responseHeaders;
        if (isEnabled ){
        responseHeaders.push({ name: 'Access-Control-Allow-Origin', value: '*' });
        responseHeaders.push({ name: 'Access-Control-Allow-Headers', value: 'x-mbx-apikey, Content-Type' });
        responseHeaders.push({ name: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' });
        responseHeaders.push({ name: 'Access-Control-Allow-Credentials', value: 'true' });
        }
        return { responseHeaders: responseHeaders };
    },
    { urls: ['<all_urls>'] },
    ['blocking', 'responseHeaders']
);


// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
    if (isEnabled) {
        isEnabled = false
        // 如果当前图标为 "open"，则切换为 "close" 图标
        chrome.browserAction.setIcon({ path: "close.png" });

    } else {
        isEnabled = true
        // 如果当前图标为 "close"，则切换为 "open" 图标
        chrome.browserAction.setIcon({ path: "open.png" });
    }
});
