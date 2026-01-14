

let loginInput = document.getElementById("loginInput");
let loginPassword = document.getElementById("loginPassword");

let prefill = localStorage.getItem("loginPrefill");
if (prefill) {
    loginInput.value = prefill;
}

document.querySelector("button").addEventListener("click", function () {

    let input = loginInput.value.trim();
    let password = loginPassword.value.trim();

    if (input === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let savedUser = localStorage.getItem("userData");

    if (!savedUser) {
        alert("No user found. Please register first.");
        return;
    }

    let user = JSON.parse(savedUser);

    if ((input === user.email || input === user.phone) && password === user.password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "profile.html";
    } else {
        alert("Invalid login credentials");
    }
});
