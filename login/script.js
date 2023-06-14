'use strict';
const button = document.querySelector('#button');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('#form')
const spinner = document.querySelector('.lds-roller')

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
const patternTel = /\+?[\(?\)?\d{10,13}]/g;
const telValidSpan = document.querySelector('.tel__valid-span');
telInput.addEventListener('input', (event) => {
    const validTel = event.target.value;
    const isValidTel = patternPassword.test(validTel)
})


// const pattern = new RegExp('\w{1,}(.|\s)?\w{1,}\@\w{1,}.\w{1,7}|\w{1,}(.|\s)?\w{1,}\w{1,}(.|\s)?\w{1,}\@\w{1,}.\w{1,7}/gi');

validFunc()
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    showSpinner()
});

function validFunc() {
        if ( !emailInput.value.length || !passwordInput.value.length ) {
        button.disabled = true;
    }   else if ( emailInput.value.length > 0 || passwordInput.value.length > 0) {
            button.disabled = false;
            console.log(resultEmailRegExp);
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


