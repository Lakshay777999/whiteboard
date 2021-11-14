socket.on("md",function(data){

    let mystyle=ctx.strokeStyle;
    let mywidth=ctx.lineWidth;
    ctx.strokeStyle=data.color;
    ctx.lineWidth=data.width;
    ctx.beginPath();
    ctx.moveTo(data.x,data.y);
    ctx.strokeStyle=mystyle;
    ctx.lineWidth=mywidth;
})
socket.on("mm",function(data){
    let mystyle=ctx.strokeStyle;
    let mywidth=ctx.lineWidth;
    ctx.strokeStyle=data.color;
    ctx.lineWidth=data.width;
    ctx.lineTo(data.x,data.y);
    ctx.stroke();
    ctx.strokeStyle=mystyle;
    ctx.lineWidth=mywidth;
})