window.onload = getProducts()


function getProducts(){
    fetch("http://127.0.0.1:8000/api/Customerlist")
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })
}