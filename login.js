var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var error = document.getElementById("error");

const form = document.getElementById("form1");
console.log(form1);
form.addEventListener("submit", function(event) {
    if (!validate()) {
        event.preventDefault();
    }
})



function validate() {



    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var regp = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;

    if (!Regex.test(email.value)) {

        alert("invalid mail id");
        return false;
    }
    if (!regp.test(pwd.value)) {
        alert("Password Not in Valid Format, it should contain a Minimum of 8 characters and a maximum of 16 characters, Must have one uppercase, lower case, number and special Characters");
        return false;
    } else {
        return true;
    }
}