let door1Clicked = false;
let door2Clicked = false;
let door3Clicked = false;
let b1Clicked = false;
let b2Clicked = false;
let d1 = document.getElementById("door1");
let d2 = document.getElementById("door2");
let d3 = document.getElementById("door3");
let b1 = document.getElementById("in1");
let b2 = document.getElementById("back1");
let op1 = 1;
let off;

d1.addEventListener("click", function() {
    door1Clicked = true;
    d1.style.border = "5px solid white";
    b1.style.height = "50px";
    b1.style.width = "100px";
    b1.style.fontSize = "25px";
    b2.style.height = "50px";
    b2.style.width = "100px";
    b2.style.fontSize = "25px";

    b1.addEventListener("click", function() {
        b1Clicked = true;
    if ((b1Clicked == true) && (door1Clicked == true)) {
        window.location.href = "index2.html";
    }
    });
    b2.addEventListener("click", function() {
        b2Clicked = true;
    if ((b2Clicked == true) && (door1Clicked == true)) {
        b1.style.height = "0px";
        b1.style.width = "0px";
        b1.style.fontSize = "0px";
        b2.style.height = "0px";
        b2.style.width = "0px";
        b2.style.fontSize = "0px";
    }
    });
});

d2.addEventListener("click", function() {
    door2Clicked = true;
    d2.style.border = "5px solid white";
    b1.style.height = "50px";
    b1.style.width = "100px";
    b1.style.fontSize = "25px";
    b2.style.height = "50px";
    b2.style.width = "100px";
    b2.style.fontSize = "25px";

    b1.addEventListener("click", function() {
        b1Clicked = true;
    if ((b1Clicked == true) && (door2Clicked == true)) {
        window.location.href = "index3.html";
    }
    });
    b2.addEventListener("click", function() {
        b2Clicked = true;
    if ((b2Clicked == true) && (door2Clicked == true)) {
        b1.style.height = "0px";
        b1.style.width = "0px";
        b1.style.fontSize = "0px";
        b2.style.height = "0px";
        b2.style.width = "0px";
        b2.style.fontSize = "0px";
    }
    });
});

d3.addEventListener("click", function() {
    door3Clicked = true;
    d3.style.border = "5px solid white";
    b1.style.height = "50px";
    b1.style.width = "100px";
    b1.style.fontSize = "25px";
    b2.style.height = "50px";
    b2.style.width = "100px";
    b2.style.fontSize = "25px";

    b1.addEventListener("click", function() {
        b1Clicked = true;
    if ((b1Clicked == true) && (door3Clicked == true)) {
        window.location.href = "index4.html";
    }
    });
    b2.addEventListener("click", function() {
        b2Clicked = true;
    if ((b2Clicked == true) && (door3Clicked == true)) {
        b1.style.height = "0px";
        b1.style.width = "0px";
        b1.style.fontSize = "0px";
        b2.style.height = "0px";
        b2.style.width = "0px";
        b2.style.fontSize = "0px";
    }
    });
});

window.addEventListener("mousemove", function(event) {
    off = event.mouseX;
    if (off < 100) {
        op1 --;
    }
    d2.style.opacity = op1;
});
