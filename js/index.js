
// change background image //
let headingImg = document.querySelector(".heading");
let arrayImg = [ "back1.jpg", "back2.jpg", "back3.jpg", "back4.jpg", "back5.jpg", "back6.jpg" ];

setInterval( () => {
  let randomNum = Math.floor( Math.random() * arrayImg.length );
  headingImg.style.backgroundImage = `url(/images/${arrayImg[randomNum]})`
}, 5000)


// let landingPage = document.querySelector(".landing-page");
// let imgsArray = [ "background1.jpg", "background2.jpg", "background3.jpg" ];


// function randomizeImg () {

//   if ( backgroundOption === true) {

//     backgroundInterval = setInterval( () => {
//       let randomNum = Math.floor( Math.random() * imgsArray.length );
//       landingPage.style.backgroundImage = `url(/photos/${imgsArray[randomNum]})`
//     }, 5000)
//   }

// }
// randomizeImg();