import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const palos = [
  { simbolo: "♥", color: "red" },
  { simbolo: "♦", color: "red" },
  { simbolo: "♠", color: "black" },
  { simbolo: "♣", color: "black" }
];

const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function generarCarta() {
  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];
  return { valor, ...palo };
}

const carta = generarCarta();
console.log(carta)

let centro = document.getElementById("centro")
let arriba = document.getElementById("arriba")
let abajo = document.getElementById("abajo")


centro.textContent = carta.simbolo;
arriba.textContent = carta.valor;
abajo.textContent = carta.valor;

arriba.style.color=carta.color
centro.style.color=carta.color
abajo.style.color=carta.color

