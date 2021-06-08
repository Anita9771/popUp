
const close = document.getElementById("closeBtn");
close.addEventListener('click', () => {
    let disappear = document.getElementById("modal-container").style.display = "none";
})

setTimeout (function(){
    let appear = document.getElementById("modal-container").style.display = "block";
    location.appear();
}, 10000)

const signed = document.getElementById("signUp");
signed.addEventListener('click', (e) => {

    let emailValue = document.getElementById("input").value;
    var validate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[gmail|yahoo]+(?:\.[com]+)*$/;
    if ((emailValue === "") || Number(emailValue) || !(emailValue.match(validate))){
            e.preventDefault();
        alert("Fill in a valid email address");
    }else{
        
        alert("Thank you for subscribing")
    }
        
    
    
})

