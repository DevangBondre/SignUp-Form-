let submit = document.getElementById("signupBtn")

submit.addEventListener('click',validation)

function validation(){

let name = document.getElementById("name")
let password = document.getElementById("password")
let dob = document.getElementById("dob")
let email = document.getElementById("email")
let phoneno = document.getElementById("phoneNo")
let popup =document.getElementById("popup") 

   if(name.value ===""|| password.value === "" || dob.value ==="" || email.value === ""){
       alert("Please fill the required fields")
   }
   else{

   }    

   if(name.value !== "" && password.value !== "" && dob.value !== "" && email.value !== "" && phoneno.value !== ""  ){
    // popup.style.transform = 'translate(-50%, -50%) scale(1)';
    popup.style.visibility = 'visible';
   }
   else{

   }
}

