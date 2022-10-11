function calculate() {
  var nome = document.getElementById("name").value;
  var altura = document.getElementById("altura").value / 100;
  var peso = document.getElementById("peso").value;

  var imc = peso / altura ** 2;
  var resultado = "";

  if (imc < 18.5) {
    resultado = "Você está magro";
  } else if (imc < 24.9) {
    resultado = "Você está no peso normal";
  } else if (imc < 29.9) {
    resultado = "Você está com sobrepeso";
  } else if (imc < 40) {
    resultado = "Você está com obesidade";
  } else if (imc > 40) {
    resultado = "Você está com obesidade grave";
  }
  addEventListener("click", mostrarResultado);
  document.getElementById("resultado").innerText = `Olá, ${nome}! ` + resultado;
}

function mostrarResultado() {
  document.getElementById("resultado").style.display = "block";
}
