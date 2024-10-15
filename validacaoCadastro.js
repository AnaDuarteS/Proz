function nameValidate() {
    const name = document.getElementById("Name");
    const span = name.nextElementSibling;
    const minLength = 6;

    if (name.value.length < minLength) {
        span.style.display = "block";
        return false;
    } else {
        span.style.display = "none"; 
        return true;
    }
}

function emailValidate() {
    const email = document.getElementById("email");
    const span = email.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
        span.style.display = "block"; 
        return false;
    } else {
        span.style.display = "none";
        return true;
    }
}

function passwordValidate() {
    const password = document.getElementById("password");
    const span = password.nextElementSibling;
    const minLength = 6; 

    if (password.value.length < minLength) {
        span.style.display = "block"; 
        return false;
    } else {
        span.style.display = "none"; 
        return true;
    }
}


function validateForm(event) {
    event.preventDefault();

    const isNameValid = nameValidate();
    const isEmailValid = emailValidate();
    const isPasswordValid = passwordValidate();

    if (isNameValid && isEmailValid && isPasswordValid) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Por favor, corrija os erros antes de enviar.");
    }
}

document.getElementById("Cadastro").addEventListener("submit", validateForm);
