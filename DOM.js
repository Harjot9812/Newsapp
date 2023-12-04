
let a = document.getElementById('name');

document.getElementsByClassName('id');

let books = document.querySelectorAll('#booklist');

Array.from(books).forEach(function(book){

        //book = "yo ";    
        console.log(book.innerHTML);// gives all HTML
    console.log(book.textContent); //this will print the text of the tag
});


//Nodes
//every tag is a node that is type by number 1,2,3,

console.log(a.nodeName);
console.log(a.nodeType);

//traverse node
const node = document.querySelector('#booklist');
console.log(node.parentElement);
console.log(node.children);

//events

var h = document.querySelector('#booklist h');

h.addEventListener('click',function(e){

    console.log(e);
}); 

// deleteing elements from listners 
const listItems = document.querySelectorAll('#book-list ul li');

Array.from(listItems).forEach(function(item){
  item.addEventListener('click', (e) => {

    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);

  });
});


// forms 

document.forms;

// create element
const list =document.querySelectorAll('book');
const li = document.createElement('li');
const bookname = document.createElement('span');
//apend 
li.appendChild(bookname);
li.className = "delete";
list.appendChild(li);









