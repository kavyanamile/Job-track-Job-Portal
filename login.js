let loginform=document.getElementById("loginform")
let email=document.getElementById("email")
let password=document.getElementById("password")
let message=document.getElementById("message")

loginform.addEventListener("submit",(e)=>{
    e.preventDefault();

    let emailValue=email.value;
    let passwordValue=password.value;

    if(emailValue===""){
        message.textContent="Please enter your email" 
        message.style.color="red"
        return;
    }
     if(passwordValue===""){
        message.textContent="Please enter your password" 
        message.style.color="red"
        return;
    }
    // message.textContent="login successfully"

    let storedemail=localStorage.getItem("email");
    let storedpassword=localStorage.getItem("password");
    console.log(storedemail);

    if(emailValue === storedemail && passwordValue === storedpassword){
        localStorage.setItem("isloggedIn","true")
        message.textContent="Login successfully"
        window.location.href="index.html" 
    }else{
        message.textContent="Invalid Credentials"
        message.style.color="red"
    }
    
})