let dt = 0;

let wind = {
    width: window.innerWidth,
    height: window.innerHeight,
};
$(window).on("resize", ()=> {
    wind = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
});

let words = [
    "people",
    "you",
    "programmers",
    "us",
    "me",
    "all"
];
let word_index = 0;

function loop() {
    requestAnimationFrame(loop);

    dt += .1;
    
    $(".circle").each(i=> {
        $(".circle").eq(i).css({
            transform: `translateY(${ Math.sin(dt / 3 * Math.cos(i * 2)) * 10 }px)`
        });
    });


    let jump = -Math.abs(Math.sin(dt)) * 10;
    $(".jump").css({
        transform: `translateY(${ jump }px)`
    });
} loop();

const input = $(".input");
$(window).on("click", ()=> {
    if (input.is(":focus") || input.val() !== "") {
        $(".input ~ .placeholder").css({
            top: 0,
            left: "15px",
            "z-index": 6,
            "font-size": "12px"
        });
    } else {
        $(".input ~ .placeholder").css({
            top: "",
            left: "",
            "z-index": "",
            "font-size": ""
        });
    }
});

const nav = $(".nav");
const start_pos = nav.offset().top;

$(window).on("wheel", e=> {
    let deltaY = e.originalEvent.deltaY;
    
    if (nav.offset().top > start_pos) {
        if (deltaY > 0) {
            nav.css({
                transform: "translateY(-100%)"
            })
        } else {
            nav.css({
                transform: ""
            })
        }
    }
});