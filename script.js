let heute = new Date();
let tag = heute.getDate();
let monat = heute.getMonth();
let jahr = heute.getFullYear();
let wochentagIndex = heute.getDay();



document.getElementById("heute").textContent = tag;

let volleDatum = tag + "." + (monat + 1) + "." + jahr;
document.getElementById("vollesDatum").textContent = volleDatum;

