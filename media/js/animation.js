var dt = 0;

function loop() {
    requestAnimationFrame(loop);

    dt += .1;
    
    $(".circle").each(i=> {
        $(".circle").css({
            transform: `translateY(${ Math.sin(dt / 3) * 10 }px)`
        });
    });
} loop();