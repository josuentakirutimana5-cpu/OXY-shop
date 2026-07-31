// OXY & IVAN SHOP
// Simple Account System



function registerUser(){



let name =
document.getElementById("regName").value;


let email =
document.getElementById("regEmail").value;


let password =
document.getElementById("regPassword").value;


let role =
document.getElementById("regRole").value;





let users =

JSON.parse(
localStorage.getItem("users")
)
|| [];





let exists = users.find(

user=>user.email===email

);





if(exists){


alert(
"Email already registered"
);

return;


}





users.push({

name:name,

email:email,

password:password,

role:role


});





localStorage.setItem(

"users",

JSON.stringify(users)

);





alert(
"Account created successfully"
);



window.location.href="login.html";


}








function loginUser(){



let email =

document.getElementById("loginEmail").value;



let password =

document.getElementById("loginPassword").value;





let users =

JSON.parse(

localStorage.getItem("users")

)
|| [];





let user = users.find(

u=>

u.email===email

&&

u.password===password

);





if(!user){


alert(
"Wrong email or password"
);


return;


}





localStorage.setItem(

"currentUser",

JSON.stringify(user)

);






alert(
"Welcome "+user.name
);






if(user.role==="seller"){


window.location.href=
"seller-dashboard.html";


}

else{


window.location.href=
"index.html";


}



}







function logout(){


localStorage.removeItem(
"currentUser"
);


window.location.href=
"login.html";


}
