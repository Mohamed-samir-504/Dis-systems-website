// window.onload = getProducts()


// function getProducts(){
//     fetch("http://127.0.0.1:8000/api/Customerlist")
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data)
//     })
// }
var jsonObject ={
    "Products":[
        {
            "id": "1",
            "img": "img/shop/6.jpg",
            "name": "white shoes",
            "price": 80,
            "description": "This is a white shoes",
            "Category": "Shoes",
            "manufacturing_company": "Sample",
            "quantity": 20
        },

        {
            "id": "2",
            "img": "img/shop/4.jpg",
            "name": "keyboard",
            "price": 100,
            "description": "This is a Keyboard",
            "Category": "Computer",
            "manufacturing_company": "Sample2",
            "quantity": 20
        },

    ]
}



window.onload = ()=>{
    jsonObject.Products.forEach((p) => loadProducts(p));
}




var row = document.getElementById("main-row")

function loadProducts(data){
    var d = document.createElement("div");
    d.setAttribute("class" , "product text-center col-lg-3 col-md-4 col-12")
    d.innerHTML = 
    '<img style="width: 100%; height: auto; box-sizing: border-box; object-fit: cover;" class="img-fluid mb-3" src="'+data.img+'" alt="">'+
    '<h5 class="p-name">'+data.name+'</h5>'+
    '<h4 class="p-price">$'+data.price+'</h4>'+
    '<h3 class="quantity">'+data.quantity+'pieces left'+'</h3>'+
    '<button class="buy-btn">Buy now</button>'+'</div>'

    document.getElementById("main-row").appendChild(d);
}