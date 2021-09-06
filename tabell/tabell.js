
//@ts-check

function KeyPress(event) {

    var c = event.which || event.keyCode;
    var x = document.getElementById("test");
    if (c == 101) // e
        x.height = x.height * 1.1;
    if (c == 120) // x
        x.height = x.height / 1.1;
    if (c == 97)  // a
        x.width = x.width * 1.1;
    if (c == 102) // f
        x.width = x.width / 1.1;
}


