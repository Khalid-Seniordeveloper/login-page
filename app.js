const email = document.querySelector('#email');
const password = document.querySelector("#password");
const form = document.querySelector('form')

form.addEventListener("submit" , (event) =>{
    event.preventDefault();

    student = {
        email : email.value,
        password : password.value
    }
    
    
    
 localStorage.setItem("student", JSON.stringify(student));
    
window.location = "login.html"

})