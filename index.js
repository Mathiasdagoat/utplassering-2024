import { io } from "socket.io-client";

const canvas = document.getElementById("stickman");
const ctx = canvas.getContext("2d");

let livesUsed = "0";

if (livesUsed  > 9) {
  ctx.beginPath();
  ctx.moveTo(10, 220);
  ctx.lineTo(150, 220);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "green";
  ctx.stroke();
}

if (livesUsed > 8) {
  ctx.beginPath();
  ctx.moveTo(60, 80);
  ctx.lineTo(60, 220);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "green";
  ctx.stroke();
}

if (livesUsed > 7) {
  ctx.beginPath();
  ctx.moveTo(170, 30);
  ctx.lineTo(60, 80);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "green";
  ctx.stroke();
}

if (livesUsed > 6) {
  ctx.beginPath();
  ctx.moveTo(170, 30);
  ctx.lineTo(170, 80);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "brown";
  ctx.stroke();
}

if (livesUsed > 5) {
  ctx.beginPath();
  ctx.arc(170, 87, 7, 0, 2 * Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();
}

if (livesUsed > 4) {
  ctx.beginPath();
  ctx.moveTo(170, 95);
  ctx.lineTo(170, 124);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

if (livesUsed > 3) {
  ctx.beginPath();
  ctx.moveTo(170, 99);
  ctx.lineTo(160, 120);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

if (livesUsed > 2) {
  ctx.beginPath();
  ctx.moveTo(170, 99);
  ctx.lineTo(180, 120);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

if (livesUsed > 1) {
  ctx.beginPath();
  ctx.moveTo(170, 120);
  ctx.lineTo(165, 145);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

if (livesUsed > 0) {
  ctx.beginPath();
  ctx.moveTo(170, 120);
  ctx.lineTo(175, 145);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

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



    document.getElementById("usernameForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
    
        var username = document.getElementById("usernameInput").value.toLowerCase(); 
    

        var pattern = /fuck|faen|helvete|skibidi|sigma|ohio|rizz|sigve|fransk|pedo|homo|homse|femboy|gay|neger|nigger|f u c k|f a e n|h e l v e t e|s k i b i d i|s i g m a|o h i o|r i z z|s i g v e|f r a n s k|p e d o|h o m o|h o m s e|f e m b o y|g a y|n e g e r|n i g g e r|w/;
    


        if (pattern.test(username)) {

            document.body.innerHTML = "<div style='color: black; text-align: center; font-size: 150px; margin-top: 10%;'><h1>nu uh</h1></div>";
        }
            else {

            document.getElementById("usernameForm").reset();
        }
    });

const socket = io("ws://localhost:3000");

