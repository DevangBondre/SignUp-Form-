let submit = document.getElementById("signupBtn")

submit.addEventListener('click',validation)

function validation(){

let name = document.getElementById("name")
let password = document.getElementById("password")
let dob = document.getElementById("dob")
let email = document.getElementById("email")


   if(name.value ===""|| password.value === "" || dob.value ==="" || email.value === ""){
       alert("Please fill the required fields")
   }
   else{

   }    

}

