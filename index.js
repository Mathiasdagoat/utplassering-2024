import{ io } from "socket.io-client";


const canvas = document.getElementById("stickman");
const ctx = canvas.getContext("2d");

let lifeUsed = ("10")

if (lifeUsed > 0) {
ctx.beginPath();
ctx.moveTo(10,220);
ctx.lineTo(150,220);
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();
}

if (lifeUsed > 1) {
ctx.beginPath();
ctx.moveTo(60,80);
ctx.lineTo(60,220);
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();
}

if (lifeUsed > 2) {
ctx.beginPath();
ctx.moveTo(170,30);
ctx.lineTo(60,80);
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();
}

if (lifeUsed > 3) {
ctx.beginPath();
ctx.moveTo(170,30);
ctx.lineTo(170,80);
ctx.lineWidth = 2;
ctx.strokeStyle = "brown";
ctx.stroke();
}

if (lifeUsed > 4) {
ctx.beginPath();
ctx.arc(170,87,7,0,2*Math.PI);
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
}

if (lifeUsed > 5){
ctx.beginPath();
ctx.moveTo(170,95);
ctx.lineTo(170,124);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();
}

if (lifeUsed > 6) {
ctx.beginPath();
ctx.moveTo(170,99);
ctx.lineTo(160,120);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();
}

if (lifeUsed > 7) {
ctx.beginPath();
ctx.moveTo(170,99);
ctx.lineTo(180,120);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();
}

if (lifeUsed > 8) {
ctx.beginPath();
ctx.moveTo(170,120);
ctx.lineTo(165,145);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();
}

if (lifeUsed > 9) {
ctx.beginPath();
ctx.moveTo(170,120);
ctx.lineTo(175,145);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();
}

window.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('usernameList').style.display = 'block';
        document.getElementById('loggedInUsername').textContent = username;
        document.getElementById('welcomeMessage').textContent = 'Welcome, ' + username + '!';
    } else {
        document.getElementById('loginPopup').style.display = 'block';
    }
});

document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('usernameInput').value;
    saveUsername(username);
    document.getElementById('loginPopup').style.display = 'none';
    document.getElementById('usernameList').style.display = 'block';
    document.getElementById('loggedInUsername').textContent = username;
    document.getElementById('welcomeMessage').textContent = 'Welcome, ' + username + '!';
});

function saveUsername(username) {

    localStorage.setItem('username', username);
}

window.addEventListener('beforeunload', function() {
    localStorage.removeItem('username');
});


const socket = io("http://localhost:3000");

socket.on("connect", ()=> {
    console.log(socket.id);
});
socket.on("Hello", (arg) => {
    console.log(arg)
})
socket.on("disconnect", () => {
    console.log(socket.id);
});

socket.emit("hello", "world");


