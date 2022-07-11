function animate(button) {
    button.classList.add("animation")
    setTimeout(function() {
        button.classList.remove("animation");
    }, 200);
}

function audio() {

    //Gets the letter of the button and plays the audio depending on which one was clicked
    var buttonHTML = this.innerHTML;


    switch (buttonHTML) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            animate(this);
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            animate(this);
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            animate(this);            
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            animate(this);
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            animate(this);
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            animate(this);
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            animate(this);
            break;
        default:
            console.log(buttonHTML);
            break;
    }

}

for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", audio);

}

//play sound depenging on which keyboard key was pressed

document.addEventListener("keydown", function(event){
    keySound(event.key);
});

function keySound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            animate(document.querySelectorAll("button")[0]);
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            animate(document.querySelectorAll("button")[1]);
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            animate(document.querySelectorAll("button")[2]);        
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            animate(document.querySelectorAll("button")[3]);
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            animate(document.querySelectorAll("button")[4]);
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            animate(document.querySelectorAll("button")[5]);
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            animate(document.querySelectorAll("button")[6]);
            break;
        default:
            console.log(buttonHTML);
            break;
    }
}

// long version of the code above

// document.querySelectorAll("button")[0].addEventListener("click", buttonClick);
// document.querySelectorAll("button")[1].addEventListener("click", buttonClick);
// document.querySelectorAll("button")[2].addEventListener("click", buttonClick);
// document.querySelectorAll("button")[3].addEventListener("click", buttonClick);
// document.querySelectorAll("button")[4].addEventListener("click", buttonClick);
// document.querySelectorAll("button")[5].addEventListener("click", buttonClick);
// document.querySelectorAll("button")[6].addEventListener("click", buttonClick);