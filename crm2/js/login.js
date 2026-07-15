// ===============================
// Get Elements
// ===============================

const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const remember = document.getElementById("remember");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const togglePassword = document.getElementById("togglePassword");

// ===============================
// Remember Me
// ===============================

window.onload = () => {

    const savedEmail = localStorage.getItem("rememberEmail");

    if(savedEmail){

        email.value = savedEmail;
        remember.checked = true;

    }

}

// ===============================
// Show / Hide Password
// ===============================

togglePassword.addEventListener("click",()=>{

    if(password.type==="password"){

        password.type="text";

        togglePassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

    }else{

        password.type="password";

        togglePassword.innerHTML='<i class="fa-solid fa-eye"></i>';

    }

});

// ===============================
// Email Validation
// ===============================

function validateEmail(value){

    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(value);

}

// ===============================
// Login Validation
// ===============================

loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    emailError.textContent="";
    passwordError.textContent="";

    let valid=true;

    // Email

    if(email.value.trim()===""){

        emailError.textContent="Email is required";
        valid=false;

    }else if(!validateEmail(email.value)){

        emailError.textContent="Enter a valid email";
        valid=false;

    }

    // Password

    if(password.value.trim()===""){

        passwordError.textContent="Password is required";
        valid=false;

    }else if(password.value.length<6){

        passwordError.textContent="Password must be at least 6 characters";
        valid=false;

    }

    if(valid){

        // Remember Email

        if(remember.checked){

            localStorage.setItem("rememberEmail",email.value);

        }else{

            localStorage.removeItem("rememberEmail");

        }

        // Fake Login

        alert("Login Successful!");

        window.location.href="dashboard.html";

    }

});
