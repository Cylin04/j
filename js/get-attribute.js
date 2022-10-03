var firstItem = document.getElementsByTagName('one');
if (firstItem.hasAttribute('class')) {
    var attr = firstItem.getAttribute('class');
    var el = document.getElementsByTagName('scriptResults');
    el.innerHTML ='<p>The first item has a class name:' + attr + '</p>';

}