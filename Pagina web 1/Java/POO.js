// Asignacion de Id Del formulario 
const name_va = document.getElementById('nombre');
const phone_va = document.getElementById('Telefono');
const email_va = document.getElementById('email');
const menssage_va = document.getElementById('menssage');


// Expresiones regulares

const nameRegex = /^[a-zA-Z]|\s{3,20}$/;
const phoneRegex = /^\d{7,10}$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9_]+$/;
const mensRegex = /^[a-zA-Z0-9\s]{10,50}$/;

// condicional de validacion y estilos 

name_va.addEventListener("input", function() {
    if (!validaName(name_va.value)){    
        name_va.style.border = '3px solid red'; 
    }else {
        name_va.style.border = '3px solid green';
    }
});

phone_va.addEventListener("input", function() {
    if (!validaPhone(phone_va.value)){
        phone_va.style.border = '3px solid red';
    }else {
        phone_va.style.border = '3px solid green';
    }
});

emailRegex.addEventListener("input", function() {
    if (!validaEmail(email_va.value)) {
        emailRegex.style.border = '3px solid red';
    }else {
        emailRegex.style.border = '3px solid green';
    }
});

mensRegex.addEventListener("input", function() {
    if (!validaEmail(mens_va.value)) {
        emailRegex.style.border = '3px solid red';
    }else {
        emailRegex.style.border = '3px solid green';
    }
});
