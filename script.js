let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");  //renderiza o desenho do canvas
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
// direção em que a cobrinha percorre
let direction = "right";

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

function iniciarJogo(){
    criarBG();
    criarCobrinha(); 

    //setando os valores do array como sendo coordenadas
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //coordenadas de direção da cobra
    if(direction == 'right'){
        snakeX += box;
    }
    if(direction == 'left'){
        snakeX -= box;
    }
    if(direction == 'up'){
        snakeY -= box
    }
    if(direction == 'down'){
        snakeY += box;
    }
}

//estou definindo um intervalo de 100ms p/ renovar o jogo
let jogo = setInterval(iniciarJogo, 100);