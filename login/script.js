'use strict';
const button = document.querySelector('#button');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('#form')
const spinner = document.querySelector('.lds-roller')

const nameInput = document.querySelector('#name');
const nameValidSpan = document.querySelector('.name__valid-span');
const patternName = /^[A-Z]{1}[a-z]{2,}\s[A-Z]{1}[a-z]{2,}(\s[A-Z]{1}[a-z]{2,})?/g;
nameInput.addEventListener('input', (event) => {
    const validName = event.target.value;
    const isValidName = patternName.test(validName);
    if (isValidName) {
        nameValidSpan.textContent = 'Valid';
    } else {
        nameValidSpan.textContent = 'Invalid';
    }
})

const patternEmail = /^\w{1,}.?\w{1,}\@\w{1,}\.\w{2,7}|\w{1,}.?\w{1,}.?\w{1,}\@\w{1,}\.\w{2,7}$/gi;
const emailValidSpan = document.querySelector('.email__valid-span');
emailInput.addEventListener('input', (event) => {
    const validEmail = event.target.value;
    const isEmailValid = patternEmail.test(validEmail);
    if (isEmailValid) {
        emailValidSpan.textContent = "Valid"
    } else {
        emailValidSpan.textContent = "Invalid"
    }
});

const telInput = document.querySelector('#tel');
const patternTel = /(\+)?[0-9]{10,13}|\+?[0-9]{10,13}|\+38\(0\d{2}\)\d{7}/g;
const telValidSpan = document.querySelector('.tel__valid-span');

telInput.addEventListener('input', (event) => {
    const validTel = event.target.value;
    const isValidTel = patternTel.test(validTel);

    if (isValidTel) {
        telValidSpan.textContent = "Valid"
    } else {
        telValidSpan.textContent = "Invalid"
    }
})


validFunc()
form.addEventListener('submit', (event) => {
    event.preventDefault();
    showSpinner()
});

function validFunc() {
        if ( !emailInput.value.length || !passwordInput.value.length || !telInput.value.length || !nameInput.value.length) {
            button.disabled = true;
    }   else if ( emailInput.value.length > 0 || passwordInput.value.length > 0 || telInput.value.length > 0 || nameInput.value.length > 0) {
            button.disabled = false;
        }
}

function showSpinner() {
    spinner.style.display = "inline-block";
    setTimeout(locationPage, 2000);
    form.style.display = 'none';
}

function locationPage() {
    location.href = '..//my-profile/index.html'
}
