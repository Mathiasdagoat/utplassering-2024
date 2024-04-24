

console.log(document.getElementById('IkkeDinTur'))


function toggleBackgroundColor() {
    document.body.classList.toggle('darkmode');
}

inputElement.addEventListener('keydown', function (event) {
    if (inputElement.value.length >= 1) {
        event.preventDefault();
    }
});

function handleKeyPress() {


    if (event.key === "Enter") {
        displayText();
    }
}

window.handleKeyPress = handleKeyPress;

function displayText() {
    const inputText = document.getElementById("inputField").value;
    const outputElement = document.getElementById("output");
    outputElement.innerText = inputText;
    const flexbox4Element = document.getElementsByClassName("flexbox4")[0];
    flexbox4Element.style.display = "block";
    console.log(inputText);
}
document.getElementById("inputField").addEventListener("keydown", handleKeyPress);

if (boxNone == 3) {
    var flexbox3Elements = document.querySelectorAll(".flexbox4");
    flexbox3Elements.forEach(function (element) {
        element.style.display = "none";
    })
}


console.log(document.getElementById('inputField'));