const fade = {
    right: $(".fade.right"),
    left: $(".fade.left"),
    top: $(".fade.top"),
    bottom: $(".fade.bottom"),
    all: $(".fade")
};

const win = $(window);

win.on("scroll", ()=> {
    if (wind.width > 820) {
        fade.all.each(i=> {
            if (win.scrollTop() + win.height() - 200 > fade.all.eq(i).offset().top) {

                fade.all.eq(i).css({
                    opacity: 1
                });

                fade.right.eq(i).css({
                    transform: "translateX(0)",
                });
                fade.top.eq(i).css({
                    transform: "translateY(0)",
                });
                fade.left.eq(i).css({
                    transform: "translateX(0)",
                });
                fade.bottom.eq(i).css({
                    transform: "translateY(0)",
                });

            } else {
                
                fade.all.eq(i).css({
                    transform: "",
                    opacity: ""
                });

            }
        });
    } else {
        fade.all.each(i=> {
            fade.all.eq(i).css({
                opacity: 1
            });

            fade.right.eq(i).css({
                transform: "translateX(0)",
            });
            fade.top.eq(i).css({
                transform: "translateY(0)",
            });
            fade.left.eq(i).css({
                transform: "translateX(0)",
            });
            fade.bottom.eq(i).css({
                transform: "translateY(0)",
            });
        });
    }
});