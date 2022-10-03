var firstItem = document.getElementsByTagName('one');
var itemContent = firstItem.innerHTML;
firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';