function validateForm(event) {
    event.preventDefault();

    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let dobInput = document.getElementById('dob');
    let phoneNoInput = document.getElementById('phoneNo');

    var isValid = true;

    
    if (isValid) {
        let popup = document.getElementById('popup');
       
        popup.style.top = '50%'; 
        popup.style.transform = 'translate(-50%,-50%)scale(1)';
        popup.style.visibility = 'visible';
    }
}

function closePopup() {
    let popup = document.getElementById('popup');
     
    popup.style.top = '0'; 
    popup.style.visibility = 'hidden';
}
