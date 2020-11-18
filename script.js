let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");  //renderiza o desenho do canvas
let box = 32;

function criarBG(){
    context.fillStyle = "lightgreen";   //definição da cor do elemento
    context.fillRect(0,0,16 * box, 16 * box); //cria o retângulo em que o jogo será executado
}

criarBG();