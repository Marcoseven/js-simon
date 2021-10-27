/* 
Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
Info:
L'alert non si chiude in automatico. Dovete chiuderla voi a mano cliccando su ok.

STRUMENTI
- ciclo;
- alert;
- setTimeout; 
- prompt();
- if;
*/

// DOM
const result = document.getElementById("result");

// array
let numbersRandom = [];

// function e ciclo for
myFunctions();
function myFunctions() {
	for (let index = 0; index < 5; index++) {
		const getNumbers = Math.round(Math.random() * 100) + 1;
		numbersRandom.push(getNumbers);
		console.log(getNumbers);
	}
}

// alert
alert(numbersRandom);

// setTimeout e function
setTimeout(popUp, 3000);
popUp();
function popUp() {
	return parseInt(
		prompt("Prova ad inserire i cinque numeri casuali comparsi in precedenza")
	);
}

// condizionale if
if (popUp == numbersRandom) {
	console.log("Hai indovinato!");
	result.innerHTML = "Hai indovinato!";
} else if (popUp != numbersRandom) {
	console.log("Mi dispiace, non hai indovinato");
	result.innerHTML = "Mi dispiace, non hai indovinato";
}
