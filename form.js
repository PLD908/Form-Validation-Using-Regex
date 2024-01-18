let invalidEmail = document.getElementById('invalid-email');
invalidEmail.style.display = "none";
let invalidPassword = document.getElementById('invalid-password');
invalidPassword.style.display = "none";
let invalidNumber = document.getElementById('invalid-number');
invalidNumber.style.display = "none";
let invalidUsername = document.getElementById('invalid-username');
invalidUsername.style.display = "none";

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function(e) {
        e.preventDefault();

        let emailValue = document.getElementById('email').value.trim();
        let passwordValue = document.getElementById('password').value.trim();
        let numberValue = document.getElementById('number').value.trim();
        let usernameValue = document.getElementById('username').value.trim();

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;
        let phonePattern = /^[0-9\s()-]+$/;
        let usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;

        let isNumberValid = phonePattern.test(numberValue);
        let isUserNameValid = usernamePattern.test(usernameValue);
        let isEmailValid = emailPattern.test(emailValue);
        let isPasswordValid = passwordPattern.test(passwordValue);
        console.log(isNumberValid);
        console.log(numberValue);

        invalidEmail.style.display = isEmailValid ? "none" : "block";
        invalidPassword.style.display = isPasswordValid ? "none" : "block";
        invalidNumber.style.display = isNumberValid ? "none" : "block";
        invalidUsername.style.display = isUserNameValid ? "none" : "block";
    });
});
