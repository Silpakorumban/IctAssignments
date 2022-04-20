var email = document.getElementById("email1");
var pwd = document.getElementById("pwd");
var error = document.getElementById("error");
var ph = document.getElementById("ph");
var pwd1 = document.getElementById("pwd1");



const form = document.getElementById("form2");
console.log(form2);
form.addEventListener("submit", function(event) {
    if (!validate()) {
        event.preventDefault();
    }
})



function validate() {



    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var regp = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    var regph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


    if (!Regex.test(email1.value)) {

        alert("invalid mail id");
        return false;
    }
    if (!regph.test(ph.value)) {
        alert("invalid phone no");
    }

    if (!regp.test(pwd.value)) {
        alert("Password Not in Valid Format, it should contain a Minimum of 8 characters and a maximum of 16 characters, Must have one uppercase, lower case, number and special Characters");
        return false;

    }


    if (!(pwd.value === pwd1.value)) {

        alert("Confirm Password is not matching");
    } else {
        return true;
    }
}