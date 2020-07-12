// immediate invoked function expression

//(function() {
//  const pictures = [
//    "contBcg-0",
//    "contBcg-1",
//    "contBcg-2",
//    "contBcg-3",
//    "contBcg-4"
//  ];
//
//  //select both left and right button. Add event listeners
//  const buttons = document.querySelectorAll('.btn')
//  const imageDIV = document.querySelector('.img-container')
//  let counter = 0
//
//  buttons.forEach(function(button){
//    button.addEventListener('click', function(e){
//      if (button.classList.contains('btn-left')){
//        counter--
//        if(counter < 0){
//          counter = pictures.length -1
//        }
//        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
//      }
//      if (button.classList.contains('btn-right')){
//        counter++
//        if(counter > pictures.length -1){
//          counter = 0
//        }
//        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
//      }
//    })
//  })
//})();

const images = [
  "../img/image1-400x400.jpg",
  "../img/image2-400x400.jpg",
  "../img/image3-400x400.jpg",
  "../img/image4-442x400.jpg",
  "../img/image5-400x400.jpg",
  "../img/image6-400x400.jpg",
];
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
