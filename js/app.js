// Add Images
const images = [
  "../img/image1-400x400.jpg",
  "../img/image2-400x400.jpg",
  "../img/image3-400x400.jpg",
  "../img/image4-442x400.jpg",
  "../img/image5-400x400.jpg",
  "../img/image6-400x400.jpg",
];

//DOM Elements
const leftArrow = document.querySelector(".btn-left");
const rightArrow = document.querySelector(".btn-right");
const imgContainer = document.querySelector(".img-container");

leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);
let counter = 0;

function slideLeft() {
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  imgContainer.style.background = `url(${images[counter]}) center/cover no-repeat`;
}
function slideRight() {
  counter++;
  if (counter > images.length - 1) {
    counter = 0;
  }
  imgContainer.style.background = `url(${images[counter]}) center/cover no-repeat`;
}
