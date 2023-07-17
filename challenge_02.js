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

/************** Lösung 1 **************/

// // Schritt 1: Deklaration der Variablen
// var firstName, age, drink;

// // Schritt 2: Eingabe des Namens über eine Prompt-Anforderung
// firstName = prompt("Geben Sie Ihren Namen ein:");

// // Schritt 3: Eingabe des Alters über eine Prompt-Anforderung und Konvertierung in eine Zahl
// age = parseInt(prompt("Geben Sie Ihr Alter ein:"));

// // Schritt 4: Ausgabe der Getränkeauswahl abhängig vom Alter
// if (age >= 0 && age <= 5) {
//   drink = "Milch";
// } else if (age >= 6 && age <= 12) {
//   drink = "Saft";
// } else if (age >= 13 && age <= 17) {
//   drink = "Cola";
// } else if (age >= 18) {
//   drink = "Wein";
// } else {
//   drink = "unbekannt";
// }

// // Ausgabe des Satzes mit dem Namen und dem entsprechenden Getränk
// console.log(firstName + " trinkt " + drink + ".");

/************** Lösung 2 **************/

// Schritt 1: Deklaration der Variablen
var firstName, age, drink;

// Schritt 2: Eingabe des Namens über eine Prompt-Anforderung
firstName = prompt("Geben Sie Ihren Namen ein:");

// Schritt 3: Eingabe des Alters über eine Prompt-Anforderung und Konvertierung in eine Zahl
age = parseInt(prompt("Geben Sie Ihr Alter ein:"));

switch (true) {
  case (age >= 0 && age <= 5):
    drink = "Milch";
    break;
  case (age >= 6 && age <= 12):
    drink = "Saft";
    break;
  case (age >= 13 && age <= 17):
    drink = "Cola";
    break;
  default:
    drink = "Wein";
    break;
}

// Ausgabe des Satzes mit dem Namen und dem entsprechenden Getränk
console.log(firstName + " trinkt " + drink + ".");
