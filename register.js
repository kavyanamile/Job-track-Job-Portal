let registerForm = document.getElementById("registerform")
let registeName = document.getElementById("registername")
let registerEmail = document.getElementById("registeremail")
let registerPassword = document.getElementById("registerpassword")
let confirmPasswordInput = document.getElementById("confirmpassword")
let message = document.getElementById("message")

registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let registerNameValue = registeName.value;
    let registerEmailValue = registerEmail.value;
    let registerPasswordValue = registerPassword.value;
    let confirmPasswordValue = confirmPasswordInput.value;
    
    if(registerNameValue === ""){
      message.textContent = "Please Enter your Name"
      message.style.color = "red"
      return;
    }
    if(registerEmailValue === ""){
      message.textContent = "Please Enter your email"
      message.style.color = "red"
      return;
    }
    if(registerPasswordValue === ""){
      message.textContent = "Please Enter your password"
      message.style.color = "red"
      return;
    }
    if(confirmPasswordValue === ""){
      message.textContent = "Please confirm your password"
      message.style.color = "red"
      return;
    }
    if(registerPasswordValue !== confirmPasswordValue){
      message.textContent = "Password is not matching"
      message.style.color = "red"
      return;
    }

    // local storage
    localStorage.setItem("name",registerNameValue)
    localStorage.setItem("email",registerEmailValue)
    localStorage.setItem("password",registerPasswordValue)
    message.textContent = "Register successfully"
    
})
let print=localStorage.getItem("name")
let email=localStorage.getItem("email")
let password=localStorage.getItem("password")

console.log(print)
