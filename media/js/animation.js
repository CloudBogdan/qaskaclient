var dt = 0;

var words = [
    "people",
    "you",
    "programmers",
    "us",
    "me",
    "all"
];
var word_index = 0;

function loop() {
    requestAnimationFrame(loop);

    dt += .1;
    
    $(".circle").each(i=> {
        $(".circle").eq(i).css({
            transform: `translateY(${ Math.sin(dt / 3 * Math.cos(i * 2)) * 10 }px)`
        });
    });


    var jump = -Math.abs(Math.sin(dt)) * 10;
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

const item = $(".nav_list_item");
const stroke = $(".nav .stroke");

stroke.css({
    width: $(".nav_list_item.active").width() + 1 + "px",
    left: $(".nav_list_item.active").offset().left - 185 + "px"
});

$(window).on("mousemove", ()=> {
    item.each(i=> {
        item.eq(i).on("mouseover", ()=> {
            stroke.css({
                width: item.eq(i).width() + 1 + "px",
                left: item.eq(i).offset().left - 185 + "px"
            });
        });
        item.eq(i).on("mouseout", ()=> {
            stroke.css({
                width: $(".nav_list_item.active").width() + 1 + "px",
                left: $(".nav_list_item.active").offset().left - 185 + "px"
            });
        });
    });
});

const nav = $(".nav");
$(window).on("wheel", e=> {
    var deltaY = e.originalEvent.deltaY;
    
    if (nav.offset().top > 698) {
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