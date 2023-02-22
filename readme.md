<!-- Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca! -->

--Creiamo un h1 dove inseriremo il prezzo del biglietto
--Creiamo una variabile costante con all'interno un prompt che chiederà quanti km vogliamo percorrere. Questo prompt avrà i numeri con le virgole quindi inseriamo il parseFloat prima
--Creiamo una variabile vuota per il prezzo iniziale.
--Creiamo una variabile costante per il prezzo finale
--A questo punto creiamo un altro prompt che invece chiederà l'età dell'utente

-- Creiamo un altra costante con all'interno il prezzo del biglietto a km, in modo tale da moltiplicarla successivamente.
-Creiamo variabili con all'interno lo sconto del 20% in una e del 40% nell'altra
--Creiamo delle condizioni dove inseriamo uno sconto del 20% a chi ha meno di 18 anni e un 40% a chi ha più di 65 anni
--Stampo il prezzo con 2 decimali