document.getElementById('btn-chck').addEventListener('click', function(){
    // console.log('btn clicked');
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    
    if(email  && password){
        window.location.href = 'bank-inside.html';
    }
    else{
        alert('invalid user');
    }
})