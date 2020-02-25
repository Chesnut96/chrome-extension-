var baby = document.getElementById('baby');
slap.onended = function(){
  chrome.runtime.sendMessage({type: 'close'});
};
