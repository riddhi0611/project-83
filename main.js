var mouseEvent="";
var lastX,lastY;
var colour="black";
var width=2;

canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    colour=document.getElementById("colour").value;
    width=document.getElementById("width").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        console.log("currentX,currentY= ");
        console.log("")
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=width;
ctx.moveTo(lastX,lastY);
ctx.lineTo(currentX,currentY);
ctx.arc(currentX,currentY,radius,0,2*Math.PI);
ctx.stroke();
    }
    lastX=currentX;
    lastY=currentY;
}
canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;
        

        console.log("touchstart");
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("lastX,lastY  = ");
        console.log("x = " + lastX + "y = " + LastY);
        ctx.moveTo(lastX,lastY);

        console.log("lastX,lastY  = ");
        lastX = currentX; 
        lastY = currentY;
    }
    function clearArea(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }


