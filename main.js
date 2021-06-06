canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var radius = 1;
var width = 1;
var color = "black";

var last_position_of_x,last_position_of_y;
canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e)
{
    radius = document.getElementById("radius").value;
    width = document.getElementById("width_of_the_line").value;
    color = document.getElementById("color").value;

    mouseEvent = my_mouse_down; 
}

canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft; 
    current_position_of_y = e.clientY - canvas.offsetTop;

    ( mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
  mouseEvent = "mouseleave";  
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}