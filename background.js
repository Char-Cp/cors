let isEnabled = false

// background.js
chrome.action.onClicked.addListener((tab) => {
  if (isEnabled) {
        isEnabled = false
        // 如果当前图标为 "open"，则切换为 "close" 图标
        chrome.action.setIcon({ path: "close.png" });
		chrome.declarativeNetRequest.updateEnabledRulesets({
		  disableRulesetIds: ["ruleset"],
		}, () => {
		  console.log("规则已禁用");
		});
    } else {
        isEnabled = true
        // 如果当前图标为 "close"，则切换为 "open" 图标
        chrome.action.setIcon({ path: "open.png" });
		chrome.declarativeNetRequest.updateEnabledRulesets({
		  enableRulesetIds: ["ruleset"],
		}, () => {
		  console.log("规则已启用");
		});

    }
})
