/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> zB: "Max trinkt Cola."

/* Getränke-Challenge */

let name, age, drink;

// Eingabe des Namens über eine Prompt-Anforderung
name = prompt("Geben Sie Ihren Namen ein:");

// Eingabe des Alters über eine Prompt-Anforderung
age = parseInt(prompt("Geben Sie Ihr Alter ein:"));

// Ausgabe der Getränkeauswahl abhängig vom Alter
drink;

if (age >= 0 && age <= 5) {
  drink = "Milch";
} else if (age >= 6 && age <= 12) {
  drink = "Saft";
} else if (age >= 13 && age <= 17) {
  drink = "Cola";
} else if (age >= 18) {
  drink = "Wein";
} else {
  drink = "unbekannt";
}

// Ausgabe des Satzes mit dem Namen und dem entsprechenden Getränk
console.log(name + " trinkt " + drink + ".");
