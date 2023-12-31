chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // Check if the URL of the tab matches either the old or new domain
    if (tab.url && (tab.url.includes('autowikica.sharepoint.com/sites/TestPlan') || tab.url.includes('autowikica.sharepoint.com/sites/IntranetSample'))) {
      // Maintain or set the icon to the default (for matched domains)
      chrome.browserAction.setIcon({path: 'images/logo.png', tabId: tabId});
    } else {
      // Change the icon to the 'no match' icon
      chrome.browserAction.setIcon({path: 'images/nomatch.png', tabId: tabId});
    }
  });
  