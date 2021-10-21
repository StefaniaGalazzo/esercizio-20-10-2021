let str = prompt("Inserisci 5 nomi separati da una virgola", 'Stefania,Sandro,Maria,Giacomo,Giorgia');
let arrAge = [32, 21, 47, 12, 78];

let arrNomi = str.replace(/ /g," ").split(",");

let array = [arrNomi, arrAge];


arrNomi.splice(3,1,'Marta');
arrAge.splice(3, 1, 6);

arrNomi.unshift('Giacomo');
arrAge.unshift(12);

arrNomi.push('Franco','Valentina');
arrAge.push(54,32);


console.log(array);






/* risultato in console 

[
    [“Giacomo”, “Stefania”, “Sandro”, “Maria”, “Marta”, “Giorgia”, “Franco”, Valentina],
    [12, 32, 21, 47, 6, 78, 54, 32]
  ]*/