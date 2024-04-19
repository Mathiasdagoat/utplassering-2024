import{ io } from "socket.io-client";

const canvas = document.getElementById("stickman");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(10,220);
ctx.lineTo(150,220);
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(60,80);
ctx.lineTo(60,220);
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(170,30);
ctx.lineTo(60,80);
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(170,30);
ctx.lineTo(170,80);
ctx.lineWidth = 2;
ctx.strokeStyle = "brown";
ctx.stroke();

const socket = io();

socket.on("connect", ()=> {
    console.log(socket.id);
});

socket.on("disconnect", () => {
    console.log(socket.id);
});


