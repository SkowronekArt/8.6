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