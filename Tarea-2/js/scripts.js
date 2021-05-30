let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


//linea
let linea = {
    radioCuerda:15,
    x: canvas.width / 2,
    y: 35,
}

//circulo
let angulo = Math.PI / 2;

let circulo = {
    radio: 80, //radio
    x: canvas.width / 2, //posicion inicial en x
    y: canvas.height / 2, //posicion inicial en y
    g: Math.PI / 3,
    T: 3000
};

let nFrames = 0;

function draw() {
    //limpiar
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //Aactualizar
    nFrames++;

    let tiempoDecorrido = nFrames * 1000/60; //tiempo de subida y bajada
    let width = (2 * Math.PI) / circulo.T;
    let angulo = circulo.g * Math.sin(width * tiempoDecorrido) + Math.PI/2;  

    circulo.x = linea.x + 250 * Math.cos(angulo);
    circulo.y = linea.y + 550 * Math.sin(angulo);

   //linea
    ctx.beginPath();
    ctx.moveTo(linea.x, linea.y);
    ctx.lineTo(circulo.x, circulo.y);
    ctx.lineWidth = 2;
    ctx.strokeStyle ="black";
    ctx.stroke();
    ctx.closePath();

  //circulo
    ctx.beginPath();
    ctx.arc(circulo.x, circulo.y, circulo.radio, 0, 2 * Math.PI);
    ctx.fillStyle ="purple";
    ctx.fill();
    ctx.closePath();

}
let temporizador = window.setInterval(draw, 1000 / 50); //fps