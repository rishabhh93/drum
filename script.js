alert("opened site");

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttoninnner=this.innerHTML;
    buttonanimation(buttoninnner);
    switch(buttoninnner){
        case "w":
            var sound1=new Audio("sounds/tom-1.mp3");
            sound1.play();
        break;
        case "a":
            var sound2=new Audio("sounds/tom-2.mp3");
            sound2.play();
        break;
        case "s":
            var sound3=new Audio("sounds/tom-3.mp3");
            sound3.play();
        break;
        case "d":
            var sound4=new Audio("sounds/tom-4.mp3");
            sound4.play();
        break;
        case "j":
            var sound5=new Audio("sounds/snare.mp3");
            sound5.play();
        break;
        case "k":
            var sound6=new Audio("sounds/crash.mp3");
            sound6.play();
        break;
        case "l":
            var sound7=new Audio("sounds/kick-bass.mp3");
            sound7.play();
        break;
        default: console.log(buttoninnner);
    }
}
)
}
document.addEventListener("keypress",function(event){
    buttonanimation(event.key);
    switch(event.key){
        case "w":
            var sound1=new Audio("sounds/tom-1.mp3");
            sound1.play();
        break;
        case "a":
            var sound2=new Audio("sounds/tom-2.mp3");
            sound2.play();
        break;
        case "s":
            var sound3=new Audio("sounds/tom-3.mp3");
            sound3.play();
        break;
        case "d":
            var sound4=new Audio("sounds/tom-4.mp3");
            sound4.play();
        break;
        case "j":
            var sound5=new Audio("sounds/snare.mp3");
            sound5.play();
        break;
        case "k":
            var sound6=new Audio("sounds/crash.mp3");
            sound6.play();
        break;
        case "l":
            var sound7=new Audio("sounds/kick-bass.mp3");
            sound7.play();
        break;
        default: console.log(event.key);
    }
})


function buttonanimation(currentkey){
    var x=document.querySelector("."+currentkey);
    x.classList.add("pressed");
    setTimeout(function(){
        x.classList.remove("pressed");
    },100);
}
    


    

