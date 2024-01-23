function validateForm(event) {
    event.preventDefault();

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
