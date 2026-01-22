
let loggedIn = localStorage.getItem("loggedIn");
if (!loggedIn) {
  window.location.href = "login.html";
}

let user = JSON.parse(localStorage.getItem("userData"));

document.getElementById("passwordForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let newPwd = document.getElementById("newPwd").value;
  let confirmPwd = document.getElementById("confirmPwd").value;
  let isChecked = document.getElementById("confirmBox").checked;

  if (!isChecked) {
    alert("Please tick confirmation checkbox!");
    return;
  }

  if (newPwd !== confirmPwd) {
    alert("Passwords do not match!");
    return;
  }

  user.password = newPwd;
  localStorage.setItem("userData", JSON.stringify(user));

  alert("Password updated successfully!");
  window.location.href = "profile.html";
});
