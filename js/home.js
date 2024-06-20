var currentUserName = localStorage.getItem("currentUserName");
var greetingInput = document.getElementById("greeting");
greetingInput.innerHTML = "Welcome " + currentUserName;

forceLogin();
function forceLogin() {
    if (!localStorage.getItem("currentUserName")) {
        window.location.href = "index.html";
    }
}
function logout() {
    localStorage.removeItem("currentUserName");
    window.location.href = "index.html";
}