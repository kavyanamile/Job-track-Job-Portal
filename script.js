// login and logout code
let loginstatus=localStorage.getItem("isloggedIn")
let authbtn=document.getElementById("authbtn")
if(loginstatus==="true"){
    authbtn.textContent="logout"
}
else{
    authbtn.textContent="login"
}
authbtn.addEventListener("click",()=>{
    if (loginstatus=="true"){
        localStorage.removeItem("isloggedIn")
    }
    window.location.href="login.html"
})
// login button
let loginbtn=document.getElementById("loginbtn")
let message=document.getElementById("message")
loginbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    // message.textContent="Login page is coming soon!!"
})

// jobs links
// let jobslink=document.getElementById("jobslink")
// jobslink.addEventListener("click",(e)=>{
//     e.preventDefault();
//     message.textContent="Jobs pages is about to come....."
// })

// applications link
// let applicationslink=document.getElementById("applicationslink")
// applicationslink.addEventListener("click",(e)=>{
//     e.preventDefault();
//     message.textContent="Applications pages is coming soooon...."
// })

// interviews link
// let interviewslink=document.getElementById("interviewslink")
// interviewslink.addEventListener("click",(e)=>{
//     e.preventDefault();
//     message.textContent="interviews pages is coming soon.."
// })