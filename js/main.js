/* =====================================
 OXY & IVAN SHOP
 Main JavaScript System
===================================== */



// =============================
// DARK MODE SYSTEM
// =============================


const themeButton = document.getElementById("theme");


if(themeButton){


themeButton.addEventListener("click",()=>{


document.body.classList.toggle("dark");



if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeButton.innerHTML="☀️";

}

else{

localStorage.setItem("theme","light");

themeButton.innerHTML="🌙";

}


});


}



// Load saved theme


if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark");

if(themeButton){

themeButton.innerHTML="☀️";

}

}






// =============================
// PRODUCT DATABASE (TEMP)
// Later replaced by Firebase
// =============================



const products=[


{
id:1,
name:"Champion Sneakers",
price:15000,
category:"Shoes",
rating:5,
stock:true,
image:"images/products/shoes.jpg"
},



{
id:2,
name:"Smart Phone",
price:150000,
category:"Electronics",
rating:4,
stock:true,
image:"images/products/phone.jpg"
},



{
id:3,
name:"Laptop Computer",
price:500000,
category:"Electronics",
rating:5,
stock:false,
image:"images/products/laptop.jpg"
}


];






// =============================
// CART SYSTEM
// =============================


let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];





function addToCart(productID){



let product =
products.find(
item=>item.id===productID
);



cart.push(product);



localStorage.setItem(
"cart",
JSON.stringify(cart)
);



alert(
product.name+" added to cart"
);


}





function getCart(){


return cart;


}





// Count items


function cartNumber(){


console.log(
"Cart Items:",
cart.length
);


}





// =============================
// DISPLAY PRODUCTS
// =============================



function showProducts(){


let container =
document.querySelector(".products");



if(!container)
return;



container.innerHTML="";



products.forEach(product=>{


container.innerHTML += `


<div class="card">


<img src="${product.image}">


<h3>${product.name}</h3>


<p>
${product.price.toLocaleString()} RWF
</p>


<p>
⭐ ${product.rating}
</p>



<button onclick="addToCart(${product.id})">

Add To Cart

</button>


</div>


`;



});


}





showProducts();






// =============================
// SEARCH SYSTEM
// =============================



function searchProduct(){


let input =
document
.getElementById("search")
.value
.toLowerCase();



let result =
products.filter(product=>

product.name
.toLowerCase()
.includes(input)

);



console.log(result);



}





// =============================
// USER NOTIFICATION
// =============================



function notify(message){


let box =
document.createElement("div");


box.innerHTML=message;



box.style.position="fixed";

box.style.bottom="20px";

box.style.right="20px";

box.style.background="#00C853";

box.style.color="white";

box.style.padding="15px 25px";

box.style.borderRadius="20px";


document.body.appendChild(box);



setTimeout(()=>{

box.remove();

},3000);



}





// =============================
// WHATSAPP CONTACT
// =============================



function openWhatsApp(){


window.open(

"https://wa.me/250794036864",

"_blank"

);


}





// =============================
// WEBSITE START MESSAGE
// =============================



window.onload=function(){


console.log(
"Welcome to OXY & IVAN SHOP"
);


};
