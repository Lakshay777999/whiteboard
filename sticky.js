const sticktnote=document.getElementById("stickynote");
//const root=document.getElementById("root");
sticktnote.addEventListener("click",function(){
    
   
   
   let stickycontent=createstickycontent();
    let textarea=document.createElement("textarea");
    textarea.cols="30";
    textarea.rows="10";
    stickycontent.appendChild(textarea);
   
})