import{ io } from "socket.io-client";

const canvas = document.getElementById("stickman");
const ctx = canvas.getContext("2d");

let lifeUsed = ("5")

if (lifeUsed > 1) {
ctx.beginPath();
ctx.moveTo(10,220);
ctx.lineTo(150,220);
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();
}

if (lifeUsed > 2) {
ctx.beginPath();
ctx.moveTo(60,80);
ctx.lineTo(60,220);
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();
}

if (lifeUsed > 3) {
ctx.beginPath();
ctx.moveTo(170,30);
ctx.lineTo(60,80);
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();
}

if (lifeUsed > 4) {
ctx.beginPath();
ctx.moveTo(170,30);
ctx.lineTo(170,80);
ctx.lineWidth = 2;
ctx.strokeStyle = "brown";
ctx.stroke();
}

if (lifeUsed > 5) {
ctx.beginPath();
ctx.arc(170,100,20,0,2*Math.PI);
ctx.strokeStyle = "black";
ctx.stroke();
}

if (lifeUsed > 6){
ctx.beginPath();
ctx.moveTo(170,120);
ctx.lineTo(170,170);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();
}

if (lifeUsed > 7) {
ctx.beginPath();
ctx.moveTo(170,125);
ctx.lineTo(150,150);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();
}

if (lifeUsed > 8) {
ctx.beginPath();
ctx.moveTo(170,125);
ctx.lineTo(190,150);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();
}

if (lifeUsed > 9) {
ctx.beginPath();
ctx.moveTo(170,170);
ctx.lineTo(140,210);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();
}

if (lifeUsed == 10) {
ctx.beginPath();
ctx.moveTo(170,170);
ctx.lineTo(200,210);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();
}

const socket = io();

socket.on("connect", ()=> {
    console.log(socket.id);
});

socket.on("disconnect", () => {
    console.log(socket.id);
});


