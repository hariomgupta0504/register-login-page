// profile.js

let loggedIn = localStorage.getItem("loggedIn");
if (!loggedIn) {
    window.location.href = "login.html";
}

let user = JSON.parse(localStorage.getItem("userData"));

document.getElementById("pName").innerText = user.name;
document.getElementById("pAge").innerText = user.age;
document.getElementById("pPhone").innerText = user.phone;
document.getElementById("pEmail").innerText = user.email;
document.getElementById("pAddress").innerText = user.address;
document.getElementById("pPincode").innerText = user.pincode;

document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
});
