document.addEventListener('DOMContentLoaded', function () {
    var countryNames = ['USA', 'India', 'France', 'Germany', 'Japan', 'Australia'];
    var index = 0;

    function changeCountryName() {
        document.getElementById('countryName').textContent = countryNames[index];
        index = (index + 1) % countryNames.length;
    }

    setInterval(changeCountryName, 200);
});

document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const persons = document.getElementById('persons').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const description = document.getElementById('description').value;

    if (destination && persons && startDate && endDate && description) {
        alert('Booking successful!');
    } else {
        alert('Please fill in all fields.');
    }
});

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function showSlides(n) {
let i;
let x = document.getElementsByClassName("package-card");
if (n > x.length) { slideIndex = 1 }
if (n < 1) { slideIndex = x.length }
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
for (i = slideIndex - 1; i < slideIndex + 2; i++) {
if (x[i]) {
x[i].style.display = "block";
}
}
}

function validateSignupForm() {
var fullname = document.getElementById('fullname');
var contact = document.getElementById('contact');
var dob = document.getElementById('dob');
var email = document.getElementById('email');
var password = document.getElementById('password');
var gender = document.getElementById('gender');

if(fullname.value === '') {
alert('Please enter your full name.');
return false;
}
if(contact.value === '') {
alert('Please enter your contact number.');
return false;
}
if(dob.value === '') {
alert('Please enter your date of birth.');
return false;
}
if(email.value === '') {
alert('Please enter your email.');
return false;
}
if(password.value === '') {
alert('Please enter your password.');
return false;
}
if(gender.value === 'Choose...') {
alert('Please select your gender.');
return false;
}

alert('Form submitted successfully!');
return true;
}

function validateLoginForm() {
var loginEmail = document.getElementById('loginEmail');
var loginPassword = document.getElementById('loginPassword');

if(loginEmail.value === '') {
alert('Please enter your email.');
return false;
}
if(loginPassword.value === '') {
alert('Please enter your password.');
return false;
}

alert('Form submitted successfully!');
return true;
}

document.querySelector('#signupForm').addEventListener('submit', function(event) {
event.preventDefault();
if(validateSignupForm()) {
this.submit();
}
});

document.querySelector('#loginForm').addEventListener('submit', function(event) {
event.preventDefault();
if(validateLoginForm()) {
this.submit();
}
});