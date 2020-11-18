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
let food = {
    x: Math.floor(Math.random() * 15 + 1 ) * box,
    y: Math.floor(Math.random() * 15 + 1 ) * box
}

function criarBG(){
    context.fillStyle = "lightgreen";   //definição da cor do elemento
    context.fillRect(0, 0, 16 * box, 16 * box); //cria o retângulo em que o jogo será executado
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = 'tomato';
    context.fillRect(food.x, food.y, box, box);
}

//criar evento de escuta para captar o valor das teclas digitadas
document.addEventListener('keydown', update); //pega o evento de cliqueno teclado e chama a função update

function update(event){
    if(event.keyCode == 37 && direction != 'right'){
        direction = 'left';
    }
    if(event.keyCode == 38 && direction != 'down'){
        direction = 'up';
    }
    if(event.keyCode == 39 && direction != 'left'){
        direction = 'right';
    }
    if(event.keyCode == 40 && direction != 'up'){
        direction = 'down';
    }

}

function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == 'right'){
        snake[0].x = 0;
    }
    if(snake[0].x < 0 && direction == 'left'){
        snake[0].x = 16 * box;
    }
    if(snake[0].y > 15 * box && direction == 'down'){
        snake[0].y = 0;
    }
    if(snake[0].y < 0 && direction == 'up'){
        snake[0].y = 16 * box;
    }

    //verificação de colisão da cobrinha com seu corpo
    for(i = 1; i <snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

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
        snakeY -= box;
    }
    if(direction == 'down'){
        snakeY += box;
    }
    
    //lógica de adição e remoção
    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }
    else {
        food.x = Math.floor(Math.random() * 15 + 1 ) * box,
        food.y = Math.floor(Math.random() * 15 + 1 ) * box
    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

//estou definindo um intervalo de 100ms p/ renovar o jogo
let jogo = setInterval(iniciarJogo, 100);

