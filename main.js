const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");


const openMouthImg = "./images/open.png";
const closeMouthImg = "./images/close.png";

// The two Popping sounds
const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");


btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);


btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})


function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}
