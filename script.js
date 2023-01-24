var entrada = document.getElementById("entrada");
var botaoEnviar = document.getElementById("enviar");
var saida = document.getElementById("saida");

function copiarEntrada(){
    saida.innerHTML = entrada.value;
}
console.log("batata")
botaoEnviar.addEventListener("click", copiarEntrada);