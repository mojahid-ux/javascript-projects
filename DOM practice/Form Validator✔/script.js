let form = document.querySelector("#myForm");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    // console.log(event);
    let username = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const passwordError = document.querySelector("#passwordError");
    const confirmPasswordError = document.querySelector("#confirmPasswordError");

    let isValid = true;

    // Name validation

    if (username.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;

    } else {
        emailError.textContent = "";
    }
        // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (password.length < 8) {
            passwordError.textContent = "password must be at least 8 characters long";
            isValid = false;
        } else if (!password.match(passwordPattern)) {
            passwordError.textContent = "Make strong password";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }
        // Confirm Password validation  

        if(confirmPassword !== password) {
            confirmPasswordError.textContent = "password do not match";
            isValid = false;
        } else {
            confirmPasswordError.textContent = "";
        }
        if(isValid ){
            alert("Form submitted successfully!");
            form.reset();
        }
})