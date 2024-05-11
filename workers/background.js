// Background tab data

var portKey = "victoria";

chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
        url = tab.url;
        chrome.runtime.onConnect.addListener(function (port) {
            console.assert(port.name === portKey);
            port.onMessage.addListener(function (msg) {
                port.postMessage({ url: url }); // change the damn with url
                console.log("onActivated: " + url)
            });
        });
        // console.log(y);
        // send the URL to the content.js file 
    })
});

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    if (tab.active && change.url) {
        url = tab.url;
        chrome.runtime.onConnect.addListener(function (port) {
            console.assert(port.name === portKey);
            port.onMessage.addListener(function (msg) {
                // console.log(url);
                port.postMessage({ url: url }); // change the damn with url
            });
        });
        // console.log(y);
        // send the URL to the content.js file 
    }
});

const BackgroundThread = {
  init: function () {},
}
BackgroundThread.init();