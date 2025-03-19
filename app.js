// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Commit 1
const imputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ullistaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado")
function agregarAmigo(){listaAmigos.push(imputAmigo.value);ullistaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;}
function sortearAmigo(){const random = Math.floor(Math.random()*listaAmigos.length);listaAmigos[ramdom]const amigoSecreto = listaAmigos[random];ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;}