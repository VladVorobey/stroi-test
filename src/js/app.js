import ScrollMagic from 'ScrollMagic';
// import 'debug.addIndicators';
import 'animation.gsap';
import { TimelineLite } from 'gsap';

let controllerBom = new ScrollMagic.Controller();
let tl = new TimelineLite();
let tltwo = new TimelineLite();
let tlthree = new TimelineLite();

let blockTweenOne = tl.staggerFromTo('.main-title', 0.8, { opacity: 1, x: 0 }, { opacity: 0, x: 30 }, 0.15);

let sceneMain = new ScrollMagic.Scene({
  triggerElement: '.form',
  //duration: 200,
  offset: 450,
  // reverse: false
}).setTween(blockTweenOne)
// .addIndicators({name:'trigger for: blockTweenOne'})
  .addTo(controllerBom);

let blockTweenTwo = tltwo.staggerFromTo('.block', 0.6, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, 0.15);

let sceneHelper = new ScrollMagic.Scene({
  triggerElement: '.title',
  //duration: 200,
  offset: -150,
  // reverse: false
}).setTween(blockTweenTwo)
// .addIndicators({name:'trigger for: blockTweenTwo'})
  .addTo(controllerBom);

let blockTweenThree = tlthree.staggerFromTo('.room-img', 0.6, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, 0.15);

let sceneRoom = new ScrollMagic.Scene({
  triggerElement: '.info-title',
  //duration: 200,
  offset: -50,
  // reverse: false
}).setTween(blockTweenThree)
// .addIndicators({name:'trigger for: blockTweenThree'})
  .addTo(controllerBom);

//берем елемент
let navigationMenu = document.querySelector('.menu__list');
let menuButton = document.querySelector('.menu__collapsed');
//вешаем ивент на наш елемент, в ивент передаем функцию
menuButton.addEventListener('click', function() {
  //добавляем-убираем класс так же как в джеквери
  navigationMenu.classList.toggle('menu__list--active');
  menuButton.classList.toggle('menu__collapsed--active');
});

