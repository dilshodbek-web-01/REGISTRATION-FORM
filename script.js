"use strict";

let userName = document.querySelector('#username'),
    firstName = document.querySelector('#firstname'),
    lastName = document.querySelector('#lastname'),
    region = document.querySelector('#region'),
    age = document.querySelector('#age'),
    birthday = document.querySelector('#birthday'),
    email = document.querySelector('#email'),
    tel = document.querySelector('#tel'),
    password = document.querySelector('#password'),
    show = document.querySelector('.show'),
    loginBtn = document.querySelector('.btn-primary'),
    toggleBtn = document.querySelector('.btn-warning'),
    card = document.querySelector('.card');

userName.addEventListener('blur', (event) => {
    if (event.target.value.trim().length === 0) {
        event.target.style.border = "1px solid red";
        event.target.setAttribute('placeholder', "Please fill input . . .")
    } else {
        event.target.style.border = "1px solid green";
        event.target.setAttribute('placeholder', "Enter your Username")
    }
})

firstName.addEventListener('blur', (event) => {
    if (event.target.value.trim().length === 0) {
        event.target.style.border = "1px solid red";
        event.target.setAttribute('placeholder', "please fill input . . .")
    } else {
        event.target.style.border = "1px solid green",
            event.target.setAttribute('placeholder', "Enter your firstName");
    }
})

lastName.addEventListener('blur', (event) => {
    if (event.target.value.trim().length === 0) {
        event.target.style.border = "1px solid red",
            event.target.setAttribute('placeholder', "Please fill input . . .")
    } else {
        event.target.style.border = "1px solid green",
            event.target.setAttribute('placeholder', "Enter your lastName")
    }
})

region.addEventListener('blur', (event) => {
    if (event.target.value.trim().length === 0) {
        event.target.style.border = "1px solid red",
            event.target.setAttribute('placeholder', "Please fill input . . .")
    } else {
        event.target.style.border = "1px solid green",
            event.target.setAttribute('placeholder', "Enter your region")
    }
})

age.addEventListener('blur', (event) => {
    if (event.target.value.trim().length === 0) {
        event.target.style.border = "1px solid red",
            event.target.setAttribute('placeholder', "Please fill input . . .")
    } else {
        event.target.style.border = "1px solid green",
            event.target.setAttribute('placeholder', "Enter your age")
    }
})

birthday.addEventListener('blur', (event) => {
    if (event.target.value.trim().length === 0) {
        event.target.style.border = "1px solid red";
    } else {
        event.target.style.border = "1px solid green";
    }
})

email.addEventListener('blur', (event) => {
    if (event.target.value.trim().length === 0) {
        event.target.style.border = "1px solid red"
        event.target.setAttribute('placeholder', "Please fill input . . .");
    } else {
        event.target.style.border = "1px solid green",
        event.target.setAttribute('placeholder', "Enter your email")
    }
})

tel.addEventListener('blur', (event) => {
    if (event.target.value.trim().length === 0) {
        event.target.style.border = "1px solid red"
        event.target.setAttribute('placeholder', "Please fill input . . .");
    } else {
        event.target.style.border = "1px solid green",
        event.target.setAttribute('placeholder', "Enter your phoneNumber")
    }
})

password.addEventListener('blur', (event) => {
    if (event.target.value.trim().length === 0) {
        event.target.style.border = "1px solid red";
        event.target.setAttribute('placeholder', "Please fill input . . .")
    } else {
        event.target.style.border = "1px solid green",
            event.target.setAttribute('placeholder', "Enter your password")
    }
})

password.addEventListener('keyup', (event) => {
    if (event.target.value.trim().length === 0) {
        show.setAttribute('class', 'show d-none')
    } else {
        show.setAttribute('class', 'show d-block')
    }
})

show.addEventListener('click', () => {
    if (password.getAttribute('type') === "password") {
        password.setAttribute('type', 'text');
        show.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
    } else {
        password.setAttribute('type', 'password');
        show.innerHTML = `<i class="bi bi-eye-fill"></i>`;
    }
})

toggleBtn.addEventListener('click', () => {
    if (card.getAttribute('id',) === "swipe") {
        card.setAttribute('id', "");
    } else {
        card.setAttribute('id', "swipe");
    }
})

userName.addEventListener('keypress', (e) => {
    if (e.target.value.toLowerCase() === "close") {
        card.setAttribute('id', "swipe");
    }
})