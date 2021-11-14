
const penciloption=document.getElementById("pencil-options");
const eraseroptions=document.getElementById("eraser-option");
const pencil=document.getElementById("pencil");
const eraser=document.getElementById("eraser");
const undo=document.getElementById("undo");
const redo=document.getElementById("redo");
const pencilcolors=document.querySelectorAll(".pencil-colors div");
const pencilsize=document.getElementById("pencilsize");
const erasersize=document.getElementById("erasersize");

let pencilwidth=1;
let eraserwidth=1;
pencilsize.addEventListener("change",function(e){
    pencilwidth=(e.target.value);
    ctx.lineWidth=pencilwidth;
})
erasersize.addEventListener("change",function(e){
    eraserwidth=(e.target.value);
    ctx.lineWidth=eraserwidth;
})


for(let i=0;i<pencilcolors.length;i++)
{
    pencilcolors[i].addEventListener("click",function(){
        if(pencilcolors[i].classList.contains("red"))
        {
            ctx.strokeStyle="red";
        }
        if(pencilcolors[i].classList.contains("blue"))
        {
            ctx.strokeStyle="blue";
        }
        if(pencilcolors[i].classList.contains("green"))
        {
            ctx.strokeStyle="green";
        }
        if(pencilcolors[i].classList.contains("black"))
        {
            ctx.strokeStyle="black";
        }


    })
}

undo.addEventListener("click",function(){
    if(points.length)
    {
   let latestline= points.pop();
   redopoint.push(latestline);
   ctx.clearRect(0,0,canvas.width,canvas.height);
   drawpoints();
    }
})
redo.addEventListener("click",function(){
    if(redopoint.length)
    {
    let line=redopoint.pop();
    points.push(line);
    for(let j=0;j<line.length;j++)
    {
       ctx.strokeStyle=line[j].color;
       ctx.lineWidth=line[j].width;
        if(line[j].id=="md")
        {
            ctx.beginPath();
            ctx.moveTo(line[j].x,line[j].y)

        }
        else{
            ctx.lineTo(line[j].x,line[j].y);
            ctx.stroke();

        }
    }
}
})

pencil.addEventListener("click",function(){
    if(!pencil.classList.contains("active-tool"))
    {
        eraser.classList.remove("active-tool");
        eraseroptions.classList.add("hide");
        pencil.classList.add("active-tool");
        ctx.strokeStyle="black";
        ctx.lineWidth=pencilwidth;

    }
    else{
        if(penciloption.classList.contains("hide"))
        penciloption.classList.remove("hide");
        else
        {
            penciloption.classList.add("hide");
        }
    }
    
    
})

eraser.addEventListener("click",function(){
    if(!eraser.classList.contains("active-tool"))
    {
        pencil.classList.remove("active-tool");
        eraser.classList.add("active-tool");
        penciloption.classList.add("hide");
        ctx.strokeStyle="white";
        ctx.lineWidth=eraserwidth;

    }
    else{
        if(eraseroptions.classList.contains("hide"))
        eraseroptions.classList.remove("hide");
        else
        {
            eraseroptions.classList.add("hide");
        }
    }
  
})

function drawpoints()
{
    for(let i=0;i<points.length;i++)
    {
        let line=points[i];
        for(let j=0;j<line.length;j++)
        {
            ctx.strokeStyle=line[j].color;
            ctx.lineWidth=line[j].width;
            if(line[j].id=="md")
            {
                ctx.beginPath();
                ctx.moveTo(line[j].x,line[j].y)

            }
            else{
                ctx.lineTo(line[j].x,line[j].y);
                ctx.stroke();

            }
        }
    }
}