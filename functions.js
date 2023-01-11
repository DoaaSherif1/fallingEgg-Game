window.addEventListener("load",function(){

    let imageObject=document.images['egg'];
    let basketObject=document.images['basket'];
    basketObject.style.top = `${window.innerHeight-basketObject.height}px`;
    imageObject.style.left=Math.floor(Math.random()*10)*100;   //for different position 

    let catchEgg=function(imageObject,basketObject){
        let eggLeft=parseInt(imageObject.style.left);
        let eggRight=eggLeft+imageObject.width;
        let eggTop=parseInt(imageObject.style.top);
        let basketLeft=parseInt(basketObject.style.left);
        let basketRight=basketLeft+basketObject.width;
        let basketTop=parseInt(basketObject.style.top);
        if(eggTop>basketTop && eggLeft>basketLeft && eggRight<basketRight){
            return true;
        }else{
            return false;
        }
    }


    const moveDown=function(imageObject)
    {
        let down=0;
        let id=setInterval(function(){
            if(catchEgg(imageObject,basketObject)){
                imageObject.classList.add("hidden");
            }

            if(down<(innerHeight-imageObject.height))
            {
                down+=10;
                imageObject.style.top=down+"px";
            }else{
                    clearInterval(id);
                    imageObject.src="images/broken.png";
                    fadeOut(imageObject);
            }
        },80);
        
}

moveDown(imageObject);

//for making the broken egg be faded after 5 sec

function fadeOut(imageObject) {
    let op = 1;  // initial opacity
    let id= setInterval(function () {
        if (op <= 0.1){
            clearInterval(id);
        }
        imageObject.style.opacity = op;
        op -= 0.1;
    }, 500);
}





/*imageObject.onmouseover=function(){
    this.classList.add("hidden");
}*/




});

let basketObject=document.images['basket'];
let moving=false;

function move(event){
    let newX = event.clientX -60;
    image.style.left = newX + "px";

}

function initialClick() {
    moving = !moving;
    image = this;
    document.addEventListener("mousemove", move, moving);
}

basketObject.addEventListener("mousemove", initialClick, moving);