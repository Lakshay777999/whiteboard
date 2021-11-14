function createstickycontent(){
    let sticky=document.createElement("div");
    sticky.classList.add("sticky");

    let stickyheader=document.createElement("div");
    stickyheader.classList.add("sticky-header");

    let minimize=document.createElement("div");
    minimize.classList.add("minimize");


    let close=document.createElement("div");
    close.classList.add("close");


    stickyheader.append(close);
    stickyheader.append(minimize);

    let stickycontent=document.createElement("div");
    stickycontent.classList.add("sticky-content");

    
    sticky.append(stickyheader);
    sticky.append(stickycontent);
    document.body.appendChild(sticky);


    minimize.addEventListener("click",function(){
       if(stickycontent.style.display=="none")
        stickycontent.style.display="block";
        else
        stickycontent.style.display="none";
    })
    close.addEventListener("click",function(){
        sticky.remove();
    })

let intialx;
let initialy;
let stickyhold;

    stickyheader.addEventListener("mousedown",function(e){
        stickyhold=true;
        intialx=e.clientX;
        initialy=e.clientY;

    })
    stickyheader.addEventListener("mousemove",function(e){
        if(stickyhold)
        {
        let finalx=e.clientX;
        let finaly=e.clientY;
        let dx=finalx-intialx;
        let dy=finaly-initialy;
        let {top,left}=sticky.getBoundingClientRect();

        sticky.style.top=top+dy+"px";
        sticky.style.left=left+dx+"px";
        intialx=finalx;
        initialy=finaly;
        }


    })
    stickyheader.addEventListener("mouseup",function(e){
        stickyhold=false;
        
        

    })
    return stickycontent;
}