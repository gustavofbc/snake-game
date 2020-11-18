let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");  //renderiza o desenho do canvas
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "lightgreen";   //definição da cor do elemento
    context.fillRect(0,0,16 * box, 16 * box); //cria o retângulo em que o jogo será executado
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();