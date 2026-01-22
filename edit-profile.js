
let loggedIn = localStorage.getItem("loggedIn");
if (!loggedIn) {
  window.location.href = "login.html";
}

let user = JSON.parse(localStorage.getItem("userData"));

document.getElementById("eName").value = user.name;
document.getElementById("eAge").value = user.age;
document.getElementById("ePhone").value = user.phone;
document.getElementById("eEmail").value = user.email;
document.getElementById("eAddress").value = user.address;
document.getElementById("ePincode").value = user.pincode;

document.getElementById("editForm").addEventListener("submit", function (e) {
  e.preventDefault();

  user.name = document.getElementById("eName").value;
  user.age = document.getElementById("eAge").value;
  user.phone = document.getElementById("ePhone").value;
  user.email = document.getElementById("eEmail").value;
  user.address = document.getElementById("eAddress").value;
  user.pincode = document.getElementById("ePincode").value;

  localStorage.setItem("userData", JSON.stringify(user));

  alert("Profile details updated successfully!");
  window.location.href = "profile.html";
});
