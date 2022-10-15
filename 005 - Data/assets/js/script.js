const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");

const relogio = setInterval(function timer() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;
});

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

/* 
let data = new Date();
let dataFormatada =
  data.getDate() + " " + meses[data.getMonth()] + " " + data.getFullYear();
console.log(dataFormatada); 
*/

const datas = setInterval(function diaAtual() {
  let dataAtual = new Date();
  let d = dataAtual.getDate();
  let m = meses[dataAtual.getMonth()];
  let y = dataAtual.getFullYear();

  if (d < 10) d = "0" + d;

  dia.textContent = d;
  mes.textContent = m;
  ano.textContent = y;
}, 100);
