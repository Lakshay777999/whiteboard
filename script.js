const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let {top:topc}=canvas.getBoundingClientRect();
canvas.height = window.innerHeight-topc;
canvas.width = window.innerWidth;
let pendown=false;
let points=[];
let lines=[];
let redopoint=[];
window.addEventListener("resize", function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    drawpoints();
  });


canvas.addEventListener("mousedown",function(e){
 
    if(redopoint.length)
    {
        redopoint=[];
    }
    let x=e.clientX;
    let y=e.clientY-topc;
    pendown=true;
    let point = {
        id: "md",
        x: x,
        y: y,
        color: ctx.strokeStyle,
        width: ctx.lineWidth,
      };
      lines.push(point);
      socket.emit("mousedown",point);
    ctx.beginPath();
    ctx.moveTo(x,y);
    console.log(x,y);
})
canvas.addEventListener("mousemove",function(e){
if(pendown)
{
    let x=e.clientX;
    let y=e.clientY-topc;
    let point = {
        id: "mm",
        x: x,
        y: y,
        color: ctx.strokeStyle,
        width: ctx.lineWidth,
      };
      lines.push(point);
      socket.emit("mousemove",point);
    ctx.lineTo(x,y);
    ctx.stroke();
}
})
canvas.addEventListener("mouseup",function(e){
pendown=false;
points.push(lines);
console.log(points);
lines=[]
})
