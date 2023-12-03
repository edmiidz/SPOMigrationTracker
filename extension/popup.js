document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('mirrorLink');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currentTab = tabs[0];
    if (currentTab.url.includes('olddomain.com')) {
      link.textContent = 'New Site';
      link.href = currentTab.url.replace('olddomain.com', 'newdomain.com');
    } else if (currentTab.url.includes('newdomain.com')) {
      link.textContent = 'Old Site';
      link.href = currentTab.url.replace('newdomain.com', 'olddomain.com');
    }
    link.addEventListener('click', function() {
      chrome.tabs.create({url: link.href});
    });
  });
});
