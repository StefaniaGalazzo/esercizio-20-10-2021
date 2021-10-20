// Operatore Ternario - versione aggiornata -  IF ELSE //
    // //

let animals = ["Dog", "Cat", "Goldfish", "Monkey", "Panda"];
let input = prompt("Inserisci il numero dell'Animale preferito:\n " + animals.join("\n ")) - 1;

console.log(input in animals ? `Chose the ${animals[input]}` : "Animal not found");


if(input in animals)
{
    console.log(`Chose the ${animals[input]}`);
}   else {
         alert("perchè non hai fatto nessuna scelta?"); 
        }







