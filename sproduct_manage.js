//import './Invetory_manage.js';

const selectedProduct = JSON.parse(localStorage.getItem('selected_p'));

var leftPic = document.getElementById("left-pic");
var right = document.getElementById("right-stuff");

leftPic.innerHTML = '<img class="img-fluid w-100" src="'+selectedProduct.img+'" alt=""></img>'

right.innerHTML = '<h2 class="py-4">'+selectedProduct.name+'</h2>'+
'<h2>$'+selectedProduct.price+'</h2>'+
'<h4 class="pb-3">Category: '+selectedProduct.Category+'</h3>'+
'<h4 class=" pb-3">manufacturing company: '+selectedProduct.manufacturing_company+'</h3>'+
'<input type="number" value="1">'+
'<button class="buy-btn">Add to cart</button>'+
'<h3 class="mt-5 mb-5">Product description</h3>'+
'<p>'+selectedProduct.description+'</p>'

