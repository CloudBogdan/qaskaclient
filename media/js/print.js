const need_responce = "Learn JS, it's cool";
let responce = "";
let cursore_pos = -1;

setTimeout(()=> {
    setInterval(()=> {
        if (cursore_pos < need_responce.length - 1) {
            cursore_pos ++;
            
            responce += need_responce[cursore_pos];
        } else {
            setTimeout(()=> {
                $("#card_res_like .num").html(6);
                $("#card_res_like").addClass("active");
            }, 500);
        }

        $("#card_res_print").text(responce);
    }, 200);
}, 1500);