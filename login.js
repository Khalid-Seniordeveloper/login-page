const email = document.querySelector('#email');
const password = document.querySelector("#password");
const form = document.querySelector('form')


form.addEventListener('submit', (event)=>{
event.preventDefault();
    let getData = JSON.parse(localStorage.getItem("student"))

if (getData && getData.email=== email.value && getData.password === password.value){
    alert("YOU ARE LOGIN")
} else {
    alert("YOU ENTER INCORRECT EMAIL OR PASWORD ")
}

})