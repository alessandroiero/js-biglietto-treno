'use strict';

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca!

// Chiedi all'utente il numero di chilometri che vuole percorrere
let lungKm = parseFloat(prompt('Inserisci i km del tuo percorso'));
console.log(lungKm);

// Creiamo un prompt con all'interno l'età
let eta = parseInt(prompt('Inserisci la tua età'));
console.log(eta)

// Moltiplichiamo il prezzo del biglietto per la costante(0.21 € al km) 
const Km = 0.21;
console.log(Km);

let prezzo = (lungKm * Km);

// Calcoliamo lo sconto
let under = ((prezzo * 20) / 100);
console.log(under);

let over = ((prezzo * 40) / 100);
console.log(over);

// Applichiamo lo sconto tramite la condizione e stampiamolo sia in console e sia in h1
if (eta < 18){
    prezzo -= under;
} else if (eta > 65){
    prezzo -= over;
} else {
    prezzo = prezzo;
}

// Stampo il prezzo
const prezzoFinale = prezzo.toFixed(2);
console.log(`Il prezzo del tuo biglietto è ${prezzoFinale}€`);

document.querySelector("h1").innerHTML = prezzoFinale;
