document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('mirrorLink');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currentTab = tabs[0];
    if (currentTab.url.includes('autowikica.sharepoint.com/sites/TestPlan')) {
      link.textContent = 'New Site';
      link.href = currentTab.url.replace('autowikica.sharepoint.com/sites/TestPlan', 'autowikica.sharepoint.com/sites/IntranetSample');
    } else if (currentTab.url.includes('autowikica.sharepoint.com/sites/IntranetSample')) {
      link.textContent = 'Old Site';
      link.href = currentTab.url.replace('autowikica.sharepoint.com/sites/IntranetSample', 'autowikica.sharepoint.com/sites/TestPlan');
    }
    link.addEventListener('click', function() {
      chrome.tabs.create({url: link.href});
    });
  });
});
