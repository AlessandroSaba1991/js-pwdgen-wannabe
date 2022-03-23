//Chiedi all’utente il suo nome,
//poi chiedi il suo cognome,
//poi chiedi il suo colore preferito
//Infine scrivi sulla pagina il risultato in questo formato : nomecognomecolorepreferito22

/* let nome;
let cognome;
let colore;
let password;

nome = prompt('Inserisci il tuo nome');
cognome = prompt('Inserisci il tuo cognome');
colore = prompt('Inserisci il tuo colore preferito');
password = nome + cognome + colore + 22;
document.getElementById('password').innerHTML = `La tua password è ${password}`;


console.log(`La tua password è ${password}`); */


const nome = prompt('Inserisci il tuo nome');
const cognome = prompt('Inserisci il tuo cognome');
const colore = prompt('Inserisci il tuo colore preferito');
const password = nome + cognome + colore + 22;

document.getElementById('password').innerHTML = `La tua password è ${password}`;

console.log(`La tua password è ${password}`);

