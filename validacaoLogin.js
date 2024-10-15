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

    if (password.value.trim() === "") {
        span.style.display = "block"; 
        return false;
    } else {
        span.style.display = "none";
        return true;
    }
}

function validateForm(event) {
    event.preventDefault(); 

    const isEmailValid = emailValidate();
    const isPasswordValid = passwordValidate();

    if (isEmailValid && isPasswordValid) {
        alert("Login efetuado com sucesso!");
    } else {
        alert("Por favor, corrija os erros antes de continuar.");
    }
}

document.getElementById("loginForm").addEventListener("submit", validateForm);
