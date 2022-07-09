let letMargin = 0;

const firstImage = document.querySelector(".first-image");
const leftButton = document.querySelector("#left_button");
const rightButton = document.querySelector("#right_button");

let leftMargin = 0;

leftButton.onclick = () => {
    leftMargin = leftMargin - 300;
    firstImage.style.marginleft + "px";
    console.log("Привіт");
}

rightButton.onclick =() => {
    leftMargin = leftMargin + 300;
    firstImage.style.marginleft + "px";
        console.log("right");
};