function init(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let width = canvas.width; //obtiene el ancho 
    let height = canvas.height; //obtiene el alto 
    let width2 = width * 0.5;  //centra el arbol
    let degraded = 0; //variable para el degradado
    let topiary = new branch(80, 0, 0); //sacar el alto del arbol
    let counter = 0;

    function anim(){
        counter++;
        degraded += 0.3; //velocidad del degradado

        if (counter % 2) { //si es par llame a la funcion draw
            draw();
        }

        window.requestAnimationFrame(anim);
    }
    anim();

    function draw() {
        ctx.save(); //guardar el estado 
        ctx.clearRect(0, 0, width, height); //para limpiar el canvas
        ctx.translate(width2, height * 0.95); //para posiciones en animaciones
        ctx.rotate(-Math.PI * 0.5); //trasnformacion que gira un elemento alrededor de un punto
        topiary.disp(ctx); //display ?
        ctx.restore(); //restaurar mas tarde 
    }

    function branch(len, ang, gen){
        this.len = len; //largo
        this.ang = ang; //angulo
        this.gen = gen; 
        this.limb = [];
        this.sway = 0; 
        this.mult = numRandom(0.01, 0.1);
        this.spawn = 0; //donde aparece el tronco
        this.vel = 0; //velocidad

        //sacar ramas random
        if(gen < 10){
            this.limb.push(new branch(len * numRandom(0.5, 0.99),
            numRandom(0, Math.PI / 6), this.gen + 1));
            this.limb.push(new branch(len * numRandom(0.5, 0.99),
            numRandom(0, -Math.PI / 6), this.gen + 1));
        }

        this.disp = function(ctx){
            this.sway++;
            ctx.save(); //guardar el estado
            this.vel *= 0.9; //velocidad

            let dif = 1-this.spawn;
            this.vel += (dif * 0.1);
            this.spawn += this.vel;

            ctx.strokeStyle = "hsla(" + (degraded % 360) + ",100%,50%,1)"; // degradado(ŭ % 360),saturacion,brillo,transparencia
            ctx.lineWidth = 1; // grosor de las
            ctx.beginPath(); //crear una nueva ruta
            ctx.rotate(this.ang + (Math.sin(this.sway * this.mult) * Math.PI / 128)); //trasnformacion que gira un elemento alrededor de un punto
            ctx.moveTo(0, 0); //mueve la ruta al punto especificado en el lienzo, sin crear una linea
            ctx.lineTo(this.len * this.spawn, 0); //agrega un nuevo punto y crea una línea HASTA ese punto DESDE el último punto especificado en el lienzo (este método no dibuja la línea).
            ctx.stroke(); //dibuja la ruta que ha definido con todos esos métodos moveTo () y lineTo (). 
            ctx.translate(this.len * this.spawn, 0);

            if(this.spawn > 0.6){
                for(let i = 0; i < this.limb.length; i++){
                    let limb = this.limb[i];
                    limb.disp(ctx);
                }
            }

            ctx.restore(); //restaurar mas tarde
        };
    }

    function numRandom(min, max){
        return Math.random() * (max - min) + min;
    }
}
init();
