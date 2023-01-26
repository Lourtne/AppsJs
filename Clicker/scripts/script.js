var click = 0;

function increment(e) {
    var x = e.clientX - 240;
    var y = e.clientY - 160;
    var dist = Math.sqrt(y*y + x*x);
    if (dist < 50) {
        click++;
        redRaw();
    }
}

var canvas = document.getElementById("Canvas");
canvas.addEventListener("click", increment)
var ctx = canvas.getContext("2d"); 

function redRaw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font="20px Verdana";
    ctx.fillText("Клики:" + click, 190, 20);
    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.arc(canvas.width/2, canvas.height/2, 50, 0, 2*3.14);
    ctx.fill();
}

redRaw();