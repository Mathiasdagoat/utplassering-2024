

let guessLetter = false;
let letter = 	document.getElementById('guessLetter'); 

function hasGuessedLetter(){
	guessLetter = true;
	console.log(guessLetter)
}


socket.on("connection", () => {
    console.log(socket.id)
    if(guessedLetter){
        socket.emit("guessLetter", letter);
        guessedLetter = false;
    }
});


//legge til server.js i index.html | √
//lage letter varabel og guessedLetter variabel | 
//hente bokstaven som blir gjettet. også legge den i letter variabelen. | 
//Når man gjetter en bokstav ved å trykke enter så skal dere gjøre guessedLetter til true | 