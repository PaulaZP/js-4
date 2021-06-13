function shapes(){
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

    function wallBounce(){
        //cuadrado
        if(xPosition + xVelo > canvas.width-100 || xPosition < 0) {
            xVelo = -xVelo;
        }

        if(yPosition + yVelo > canvas.height-100 || yPosition < 0) {
            yVelo = -yVelo;
        }

        //circulo
        if(xPositionC + xVeloC > canvas.width-50 || xPositionC + xVeloC < 50) {
            xVeloC = -xVeloC;
        }

        if(yPositionC + yVeloC > canvas.height-50 || yPositionC + yVeloC < 50) {
            yVeloC = -yVeloC;
        }
        
        window.requestAnimationFrame(wallBounce);
    }

    function object(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const square = new objectSquare(xPosition, yPosition, xVelo, yVelo);
        const circle = new objectCircle(xPositionC, yPositionC, xVeloC, yVeloC);

        square.drawSquare();
        circle.drawCircle();
        figuresCollision();

        xPosition += xVelo ;
        yPosition += yVelo ;

        xPositionC += xVeloC ;
        yPositionC += yVeloC ;

        window.requestAnimationFrame(object);
    }

    class objectSquare{
        constructor(xPosition, yPosition, xVelo, yVelo){
            this.xPosition = xPosition;
            this.yPosition = yPosition;
            this.xVelo = xVelo;
            this.yVelo = yVelo;
        }
        drawSquare(){
            //cuadrado
            ctx.fillStyle = "blue";
            ctx.fillRect(xPosition, yPosition, 100, 100);
        }
    }

    class objectCircle{
        constructor(xPositionC, yPositionC, xVeloC, yVeloC){
            this.xPositionC = xPositionC;
            this.yPositionC = yPositionC;
            this.xVeloC = xVeloC;
            this.yVeloC = yVeloC;
        }
        drawCircle(){
            //circulo
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(xPositionC, yPositionC, 50, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    function figuresCollision() {
        let distX = xPositionC - xPosition;
        let distY = yPositionC - yPosition;

        let distance = Math.sqrt((distX * distX) + (distY * distY));

        if(distance <= 100){
            if(Math.abs(distX) <= 100 && Math.abs(distX) > 75){
                xVelo = -xVelo;
                xVeloC = -xVeloC;
            }
            if(Math.abs(distY) <= 100 && Math.abs(distY) > 75){
                yVelo = -yVelo;
                yVeloC = -yVeloC;
            }
        }

        window.requestAnimationFrame(figuresCollision);
    }

    function getRandomArbitrary(min, max){
        return Math.random() * (max - min) + min;
    }

    window.requestAnimationFrame(wallBounce);
    window.requestAnimationFrame(object);
    window.requestAnimationFrame(figuresCollision);
}
shapes();


