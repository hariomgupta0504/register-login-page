// register.js

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let pincode = document.getElementById("pincode").value.trim();
    let password = document.getElementById("password").value.trim();

    // basic validation
    if (name === "" || email === "" || password === "") {
        alert("Name, Email and Password are required");
        return;
    }

    // check duplicate user
    let existingUser = localStorage.getItem("userData");
    if (existingUser) {
        let parsedUser = JSON.parse(existingUser);
        if (parsedUser.email === email || parsedUser.phone === phone) {
            alert("User already registered");
            return;
        }
    }

    let user = {
        name: name,
        age: age,
        phone: phone,
        email: email,
        address: address,
        pincode: pincode,
        password: password
    };

    localStorage.setItem("userData", JSON.stringify(user));

    // store email/phone for autofill
    localStorage.setItem("loginPrefill", email || phone);

    window.location.href = "login.html";
});
