function transition(key) {
    var press=document.querySelector("."+key);
    press.classList.add("pressed");
    setTimeout(function (){
        press.classList.remove("pressed");
    },350);
}

function makesoundwithkeys(event){
    var key=event.key;
    switch(key){
        case 'a':
            var tom1=new Audio("sounds/clap.wav");
            tom1.play();
            transition(key);
            break;
        case 's':
            var tom1=new Audio("sounds/hihat.wav");
            tom1.play();
            transition(key);
            break;
        case 'd':
            var tom1=new Audio("sounds/kick.wav");
            tom1.play();
            transition(key);
            break;
        case 'f':
            var tom1=new Audio("sounds/openhat.wav");
            tom1.play();
            transition(key);
            break;
        case 'g':
            var tom1=new Audio("sounds/boom.wav");
            tom1.play();
            transition(key);
            break;
        case 'h':
            var tom1=new Audio("sounds/ride.wav");
            tom1.play();
            transition(key);
            break;
        case 'j':
            var tom1=new Audio("sounds/snare.wav");
            tom1.play();
            transition(key);
            break;
        case 'k':
            var tom1=new Audio("sounds/tom.wav");
            tom1.play();
            transition(key);
            break;
        case 'l':
            var tom1=new Audio("sounds/tink.wav");
            tom1.play();
            transition(key);
            break;
        default:
            console.log(key);
    }
}


var keys=document.querySelectorAll(".btn");
keys.forEach(key => key.addEventListener("click",function (){
    var key=this.classList[2];
    switch(key){
        case 'a':
            var tom1=new Audio("sounds/clap.wav");
            tom1.play();
            break;
        case 's':
            var tom1=new Audio("sounds/hihat.wav");
            tom1.play();
            break;
        case 'd':
            var tom1=new Audio("sounds/kick.wav");
            tom1.play();
            break;
        case 'f':
            var tom1=new Audio("sounds/openhat.wav");
            tom1.play();
            break;
        case 'g':
            var tom1=new Audio("sounds/boom.wav");
            tom1.play();
            break;
        case 'h':
            var tom1=new Audio("sounds/ride.wav");
            tom1.play();
            break;
        case 'j':
            var tom1=new Audio("sounds/snare.wav");
            tom1.play();
            break;
        case 'k':
            var tom1=new Audio("sounds/tom.wav");
            tom1.play();
            break;
        case 'l':
            var tom1=new Audio("sounds/tink.wav");
            tom1.play();
            break;
        default:
            console.log(key);
    }
}))

window.addEventListener("keydown",makesoundwithkeys);