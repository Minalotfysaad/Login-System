var currentUserName = localStorage.getItem("currentUserName");
var greetingInput = document.getElementById("greeting");
greetingInput.innerHTML = "Welcome " + currentUserName;

function logout() {
    localStorage.removeItem("currentUserName");
    window.location.href = "index.html";
}