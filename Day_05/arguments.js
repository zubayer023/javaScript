



var items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
    const item = items[i];
   item.addEventListener('click', function(event) {
    event.target.parentNode.removeChild(event.target);
   })
}

document.getElementById('addNew').addEventListener('click', function(event) {
    var itemParent = document.getElementById('myList');
    var newItem = document.createElement('li');
    newItem.innerText = 'Brand New Item';
    itemParent.appendChild(newItem);
})
