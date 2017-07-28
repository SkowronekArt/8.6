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

var a = prompt("Podaj wartość a", a)
var b = prompt("Podaj wartość b", b)
	value = (a * a) + (2 * a * b) - (b * b)

if (value < 0) {
	console.log("Wynik jest mniejszy od zera");
}
if (value > 0) {
	console.log("Wynik jest większy od zera");
}
if (value == 0) {
	console.log("Wynik równy jest zeru");
}

alert("(" + a + " x "+ a +") + (2 x " + a + " + " + b + ") - (" + b + " x " + b + ") = " + value);
console.log(value);



var c = prompt("Podaj wartość c", c);
var	d = prompt("Podaj wartość d", d);
	valueCmultiplyD = c * d;
	valueHigherEqualZero = valueCmultiplyD >= 0 ? "Wynik mnożenia c * d jest większy lub równy zeru" : "Wynik mnożenia c * d jest mniejszy od zera";


alert(valueHigherEqualZero + " i wynosi " + valueCmultiplyD);
console.log(valueHigherEqualZero + " i wynosi " + valueCmultiplyD);





var e = prompt("Podaj wartość e", e);
var	f = prompt("Podaj wartość f", f);
	valueEdivideF = e / f;
	valueEdivideFModulo = e % f;

	if (valueEdivideFModulo == 0) {
		alert("nie ma reszty z dzielenia " + e + " / " + f)
		console.log("nie ma reszty z dzielenia " + e + " / " + f)
	}
	else
	{
		alert("Reszta z dzielenia " + e + " / " + f + " równa jest " + valueEdivideFModulo)
		console.log("Reszta z dzielenia " + e + " / " + f + " równa jest " + valueEdivideFModulo)
	}