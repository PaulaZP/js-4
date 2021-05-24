const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//cuadrado
let xPosition = 100;
let yPosition = 100;
let xVelo = getRandomArbitrary(-20, 20);
let yVelo = getRandomArbitrary(-20,20);

  //circulo
let xPositionC = 50;
let yPositionC = 50;
let xVeloC = getRandomArbitrary(-20, 20);
let yVeloC = getRandomArbitrary(-20,20);

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //cuadrado
    ctx.fillStyle = "blue";
    ctx.fillRect(xPosition, yPosition, 100, 100);

    if(xPosition + xVelo > canvas.width-100 || xPosition < 0) {
        xVelo = -xVelo;
    }

    if(yPosition + yVelo > canvas.height-100 || yPosition < 0) {
        yVelo = -yVelo;
    }

    xPosition += xVelo ;
    yPosition += yVelo ;


    //circulo
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(xPositionC, yPositionC, 50, 0, 2 * Math.PI);
    ctx.fill();

    if(xPositionC + xVeloC > canvas.width-50 || xPositionC + xVeloC < 50) {
        xVeloC = -xVeloC;
    }

    if(yPositionC + yVeloC > canvas.height-50 || yPositionC + yVeloC < 50) {
        yVeloC = -yVeloC;
    }
    xPositionC += xVeloC ;
    yPositionC += yVeloC ;
    
    window.requestAnimationFrame(draw);
}

function getRandomArbitrary(min, max){
    return Math.random() * (max - min) + min;
}

window.requestAnimationFrame(draw);






/*let dx = xPosition - xPositionC;
let dy = yPosition - yPositionC;
let distancia = Math.sqrt(dx * dx + dy * dy);*/

