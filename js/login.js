document.getElementById("login").addEventListener("click",function(){
    let emailInfo = document.querySelector("#email");
    let passwordInfo = document.getElementById("password");
  
    let email = emailInfo.value;
    let password = passwordInfo.value;
    
    if(email === 'ashahriyar71@gmail.com' && password === 'shahriyar')
    {
        alert("Login Successful");
      window.location.href='bank.html';
    }
  });