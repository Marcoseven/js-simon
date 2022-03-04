/* 
Traccia esercizio.

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

function generateRandomNumbers(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let numbersRandom = [];

// function e ciclo for
while (numbersRandom.length < 5) {
	const getNumbers = generateRandomNumbers(1, 100);
	if (!numbersRandom.includes(getNumbers)) {
		numbersRandom.push(getNumbers);
	}
}
alert(numbersRandom);

// setTimeout e function
setTimeout(popUp, 3000);
function popUp() {
	const numbers = [];
	for (let i = 0; i < 5; i++) {
		const number = parseInt(
			prompt("Prova ad inserire i cinque numeri casuali comparsi in precedenza")
		);
		console.log(numbers);
		if (numbersRandom.includes.numbers) {
			numbers.push(number);
		}
	}
	alert("Hai indovinato" + numbers.leght + " numeri:" + numbers.toString());
}
