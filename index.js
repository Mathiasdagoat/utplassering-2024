import { io } from "socket.io-client";

const socket = io();

socket.on("connect", ()=> {
    console.log(socket.id);
});

socket.on("disconnect", () => {
    console.log(socket.id);
});

function handleKeyPress(event) {
    if (event.key === "Enter") {
        displayText();
    }
}

function displayText() {
var inputText = document.getElementById("inputField").value;
document.getElementById("output").innerText = inputText;
}

document.getElementById("inputField").addEventListener("keydown", handleKeyPress);