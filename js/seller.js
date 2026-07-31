// OXY & IVAN SHOP
// Seller Dashboard System



let products =

JSON.parse(

localStorage.getItem("products")

)
|| [];





function addProduct(){



let name =

document.getElementById(
"productName"
).value;




let image =

document.getElementById(
"productImage"
).value;




let price =

document.getElementById(
"productPrice"
).value;




let category =

document.getElementById(
"productCategory"
).value;




let stock =

document.getElementById(
"productStock"
).value;





let product={


id:Date.now(),


name:name,


image:image,


price:price,


category:category,


stock:stock


};






products.push(product);





localStorage.setItem(

"products",

JSON.stringify(products)

);





alert(
"Product uploaded"
);





displaySellerProducts();



}







function displaySellerProducts(){



let box =

document.getElementById(
"sellerProducts"
);



if(!box)return;




box.innerHTML="";





products.forEach(product=>{



box.innerHTML += `



<div class="card">


<img src="${product.image}">


<h3>
${product.name}
</h3>


<p>
${product.price} RWF
</p>


<p>
Stock: ${product.stock}
</p>


<button onclick="deleteProduct(${product.id})">

Delete

</button>


</div>



`;



});



}







function deleteProduct(id){



products = products.filter(

product=>

product.id !== id

);



localStorage.setItem(

"products",

JSON.stringify(products)

);



displaySellerProducts();


}







displaySellerProducts();
