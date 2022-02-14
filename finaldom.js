var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
form.addEventListener('submit',addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup',filterItems)
function addItem(a){
    a.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    form.firstChild(removeChild(text.value));
    }
    
    function removeItem(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are u sure bitch?')){
                var li1 = e.target.parentElement;
                itemList.removeChild(li1);
            }
        }
    }
    function filterItems(e){
        var text = e.target.value.toLowerCase();
        var items = itemList.getElementsByTagName('li');
       Array.from(items).forEach(function(item){
           var itemName = item.firstChild.textContent;
           if(itemName.toLowerCase().indexOf(text) != -1){
               item.style.display='block' ;
           }
           else {
               item.style.display = 'none'
           }
        });
    }
    
