const menu_button = $(".menu");
const menu_panel = $(".menu_bars");

let open = false;

menu_button.on("click", ()=> {
    open = !open;

    if (open) {
        menu_panel.css({
            transform: "translateX(0)"
        });
    } else {
        menu_panel.css({
            transform: ""
        });
    }
});