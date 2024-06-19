// Global Variables

var usersArray = [];
if (localStorage.getItem("bookmarks") !== null) {
    usersArray = JSON.parse(localStorage.getItem("users"));
}
function register() {
    var userNameInput = document.getElementById("userName");
    var userEmailInput = document.getElementById("userEmail");
    var userPassInput = document.getElementById("userPass");
    var errorInput = document.getElementById("error");
    var successInput = document.getElementById("success");

    if (
        userNameInput.value == "" ||
        userEmailInput.value == "" ||
        userPassInput.value == ""
    ) {
        errorInput.innerText = "All fields are required.";
        errorInput.classList.remove("d-none");
        successInput.classList.add("d-none");
        return false;
    }

    if (
        !validateInputs(userNameInput) ||
        !validateInputs(userEmailInput) ||
        !validateInputs(userPassInput)
    ) {
        return false;
    }

    for (var i = 0; i < usersArray.length; i++) {
        if (usersArray[i].userEmail === userEmailInput.value) {
            errorInput.innerText = "User with this email already exists.";
            errorInput.classList.remove("d-none");
            successInput.classList.add("d-none");
            return false;
        }
    }

    // If user does not exist, proceed with registration
    var user = {
        userName: userNameInput.value,
        userEmail: userEmailInput.value,
        userPass: userPassInput.value,
    };
    usersArray.push(user);
    localStorage.setItem("users", JSON.stringify(usersArray));

    // Reset error message and show success message
    errorInput.classList.add("d-none");
    successInput.classList.remove("d-none");

    // Redirect after 2 seconds
    setTimeout(function () {
        window.location.href = "index.html";
    }, 2000);

    return true;
}

function login() {
    var errorInput = document.getElementById("loginError");
    var userEmailInput = document.getElementById("userEmail");
    var userPassInput = document.getElementById("userPass");

    for (var i = 0; i < usersArray.length; i++) {
        if (
            userEmailInput.value === usersArray[i].userEmail &&
            userPassInput.value === usersArray[i].userPass
        ) {
            localStorage.setItem("currentUserName", usersArray[i].userName);
            window.location.href = "home.html";
            return true;
        }
    }
    errorInput.innerText = "Incorrect username or password.";
    errorInput.classList.remove("d-none");
    return false;
}

function validateInputs(element) {
    var regex = {
        userName: /^[a-zA-Z\s]{3,}$/,
        userEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        userPass: /^[a-zA-Z0-9!@#$%^&*/s]{8,}$/,
    };
    if (regex[element.id].test(element.value) == true) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.classList.add("d-none");
        return true;
    } else {
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
        element.nextElementSibling.classList.remove("d-none");
        return false;
    }
}
