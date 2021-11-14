const imgupload=document.getElementById("photo-upload");
const photo=document.getElementById("photo");

const download=document.getElementById("Download");

photo.addEventListener("click",function(){
    imgupload.click();
})

imgupload.addEventListener("change",function(){
    let path=(imgupload.files[0].path);
    let img=document.createElement("img");
    img.setAttribute("src",path);
    img.classList.add("photo");

    let stickycontent=createstickycontent();
    stickycontent.appendChild(img);
    

})
download.addEventListener("click",function(){
    let filepath=canvas.toDataURL("image/png");
    console.log(filepath);
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.setAttribute("href",filepath);
    link.click();
    link.remove();
})