// script.js



/*
1.	Stwórz zmienne potrzebne do wykonania działania (a * a) + (2 * a * b) - (b * b) ,
2.	Wynik przypisz do zmiennej value. 
3.	Wyświetl wynik w konsoli,
4.	Za pomocą instrukcji warunkowej sprawdź, czy wynik jest dodatni czy ujemny
5.	Wyświetl informację wynik dodatni lub wynik ujemny w konsoli.

6.	Dodaj instrukcję, która sprawdzi, czy wynik jest równy zero
7.	wyświetl tę informację.

8.	Stwórz nowe repozytorium i wyślij tam swoje zadanie, a link do niego wklej poniżej.

9.	Udostępnij repozytorium swojemu mentorowi.
*/

var a = prompt("Podaj wartość a", "1");
var b = prompt("Podaj wartość b", "1");
var	value = (a * a) + (2 * a * b) - (b * b);

if (value < 0) {
	console.log("Wynik jest mniejszy od zera");
}
if (value > 0) {
	console.log("Wynik jest większy od zera");
}
if (value == 0) {
	console.log("Wynik równy jest zeru");
}


document.getElementById("mnozenie").innerHTML = ("(" + a + " x "+ a +") + (2 x " + a + " + " + b + ") - (" + b + " x " + b + ") = " + value);
console.log(value);



var c = prompt("Podaj wartość c", "1");
var	d = prompt("Podaj wartość d", "1");
var valueCmultiplyD = c * d;
var valueHigherEqualZero = valueCmultiplyD >= 0 ? (c + " * " + d + " jest większy lub równy zeru") : (c + " * " + d + " jest mniejszy od zera");

document.getElementById("krotkieMnozenie").innerHTML = (valueHigherEqualZero + " i wynosi " + valueCmultiplyD);
console.log(valueHigherEqualZero + " i wynosi " + valueCmultiplyD);





var e = prompt("Podaj wartość e", "1");
var	f = prompt("Podaj wartość f", "1");
var valueEdivideF = e / f;
var valueEdivideFModulo = e % f;

	if (valueEdivideFModulo == 0) {
		document.getElementById("modulo").innerHTML = ("Wynik dzielenia e/f czyli " + e + " / " + f + " równy jest " + valueEdivideF + "<br/>Nie ma reszty z tego dzielenia");
		console.log("Nie ma reszty z dzielenia " + e + " / " + f);
	}
	else
	{
		document.getElementById("modulo").innerHTML = ("Wynik dzielenia e/f czyli " + e + " / " + f + " równy jest " + valueEdivideF + "<br/>A reszta z tego dzielenia to " + valueEdivideFModulo);
		console.log("Reszta z dzielenia " + e + " / " + f + " równa jest " + valueEdivideFModulo);
	}