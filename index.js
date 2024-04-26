import { io } from "socket.io-client";


function updateLivesDisplay() {
  document.getElementById('livesUsedDisplay').textContent = "Lives Used: " + livesUsed;
}

updateLivesDisplay();

window.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username");

  if (isLoggedIn && username) {
    document.getElementById("usernameList").style.display = "block";
    document.getElementById("loggedInUsername").textContent = username;
    document.getElementById("welcomeMessage").textContent =
      "Welcome, " + username + "!";
  } else {
    document.getElementById("loginPopup").style.display = "block";
  }
});

document
  .getElementById("usernameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("usernameInput").value;
    saveUsername(username);
    document.getElementById('loginPopup').style.display = 'none';
    document.getElementById('usernameList').style.display = 'block';
    document.getElementById('loggedInUsername').textContent = username;
    document.getElementById('welcomeMessage').textContent = 'Welcome, ' + username;
});

function saveUsername(username) {
    localStorage.setItem('username', username);
    localStorage.setItem('isLoggedIn', 'true'); 
    console.log(username, "logged in");
}

window.addEventListener('beforeunload', function() {
    localStorage.removeItem('username');
    localStorage.setItem('isLoggedIn', 'false'); 
    console.log(username, "logged out");    
});
    document.getElementById("usernameForm").addEventListener("submit");
const socket = io("ws://localhost:3000");

