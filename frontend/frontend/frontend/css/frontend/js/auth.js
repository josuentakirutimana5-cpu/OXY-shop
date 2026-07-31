// OXY & IVAN SHOP AUTH SYSTEM


function register(){


let name =
document.getElementById("name").value;


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;


let role =
document.getElementById("role").value;




console.log({

name,
email,
password,
role

});



alert(
"Registration page ready. Backend connection coming next."
);


}





function login(){



let email =
document.getElementById("email").value;



let password =
document.getElementById("password").value;



console.log({

email,
password

});



alert(
"Login page ready. Backend connection coming next."
);



}
