document.getElementById('login-submit').addEventListener('click',function(){
    //get user Email field
   const emalField = document.getElementById('user-email');
   const userField = emalField.value;
  
    //get user password field

    const passeordFiled = document.getElementById('user-password');
    const userPassword = passeordFiled.value;

    // password === if ..

    if( userField == 'jony12345@gmail.com' && userPassword == 'jony12345'){
        window.location.href ='banking.html';
        
    }
    else{
        console.log('invalid user');
    }

});
