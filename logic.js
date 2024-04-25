function toggleBackgroundColor() {
    document.body.classList.toggle('darkmode');
}
var inputElement = document.getElementById('inputField').addEventListener("input", function () {
    hideBox();
});

inputElement.addEventListener('keydown', function (event) {
    if (inputElement.value.length >= 1) {
        event.preventDefault();
    }
});

function handleKeyPress(event) {
    if (event.key === "Enter") {
        displayText();
    }
}

function displayText() {
    const inputText = document.getElementById("inputField").value;
    const outputElement = document.getElementById("output");
    outputElement.innerText = inputText;
    console.log(inputText);
}
document.getElementById("inputField").addEventListener("keydown", handleKeyPress);


console.log(document.getElementById('inputField'));

