document.getElementById("login").addEventListener("click", function() {
    let emailInfo = document.querySelector("#email");
    let passwordInfo = document.getElementById("#password");

    let email = emailInfo.value;\
    let password = passwordInfo.value;
    
    if(email === "ashahriyar@gmail.com && password === "123456") {
        alert("Login Successful");
        window.location.href = "bank.html";
    }

    });