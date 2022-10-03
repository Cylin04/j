var firstItem = document.getElementsByTagName('one');
var showTextContent = firstItem.textContent;
var showInnerText =firstItem.innerHTML;
var msg = '<p>textContent: '+ showTextContent + '</p>';
var msg += '<p>innerText:' + showTextContent + '</p>';
var el = document.getElementsByTagName('scriptResults');
el.innerHTML = msg ;
firstItem.textContent = 'sourdough bread';